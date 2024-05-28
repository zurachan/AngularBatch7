import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonService } from './services/common.service';
import { ModalComponent } from './shared/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  componentRef: ComponentRef<ModalComponent>;
  title = 'AngularBatch7';

  constructor(
    private container: ViewContainerRef,
    private commonService: CommonService
  ) {}
  ngOnInit(): void {
    this.commonService.open$.subscribe((res: any) => {
      if (res.open) this.renderModal(res.formComp, res.data);
    });

    this.commonService.close$.subscribe((res) => {
      this.container.clear();
      if (this.componentRef) {
        this.componentRef.destroy();
      }
    });
  }
  renderModal(formComp: any, data: any) {
    this.container.clear();
    this.componentRef = this.container.createComponent(ModalComponent);
    this.componentRef.setInput('formComp', formComp);
    this.componentRef.setInput('data', data);
    this.componentRef.changeDetectorRef.detectChanges();
  }
}
