import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnChanges {
  @ViewChild('modalcontent', { read: ViewContainerRef, static: true })
  componentRef: any;
  @Input() formComp: any;
  @Input() data: any;

  constructor(
    private commonService: CommonService,
    private container: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    this.container.clear();
    this.componentRef = this.container.createComponent(this.formComp);
    this.componentRef.setInput('data', this.data);
    this.componentRef.changeDetectorRef.detectChanges();
  }

  ngOnInit() {}
  ngOnDestroy(): void {}
  onClose() {
    this.commonService.closeModal();
  }
}
