import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { PaginationResponse } from 'src/app/model/Pagination';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../model/User';
import { UserPopupComponent } from '../user-popup/user-popup.component';
import { CommonService } from 'src/app/services/common.service';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  componentRef: ComponentRef<UserPopupComponent>;
  paginationRes = new PaginationResponse<User[]>();
  searchParam = {
    pageNumber: 1,
    pageSize: 5,
    User: '',
  };
  constructor(
    private userService: UserService,
    private router: Router,
    private container: ViewContainerRef,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getUser();
    this.userService.close$.subscribe((reason) => {
      this.container.clear();
      if (this.componentRef) {
        this.componentRef.destroy();
      }
      if (reason) this.getUser();
    });
  }
  getUser() {
    this.userService.getUsers(this.searchParam).subscribe((res) => {
      this.paginationRes = res;
    });
  }

  pageChange(value: any) {
    console.log(value);
  }

  onClickSua(item?: User) {
    if (item) this.router.navigateByUrl('management/user/' + item.id);
    else this.router.navigateByUrl('management/user/' + 0);
  }
  onClickSuaPopup(title: string, item?: User) {
    // this.renderModal({ title: title, item: item });
    this.commonService.openModal(
      UserModalComponent,
      { title: title, item: item },
      true
    );
  }

  renderModal(data: any) {
    this.container.clear();
    this.componentRef = this.container.createComponent(UserPopupComponent);
    this.componentRef.setInput('data', data);
    this.componentRef.changeDetectorRef.detectChanges();
  }
  onDelete(item: User) {
    if (item)
      this.userService.deleteUser(item.id).subscribe((res) => {
        this.getUser();
      });
  }
}
