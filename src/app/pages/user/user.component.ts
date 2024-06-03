import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'src/app/model/Breadcrumb';
import { Pagination } from 'src/app/model/Pagination';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../model/User';
import { UserPopupComponent } from './user-popup/user-popup.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  componentRef: ComponentRef<UserPopupComponent>;
  datasource: User[] = [];
  paging = new Pagination();
  searchParam = {
    pageNumber: 1,
    pageSize: 5,
    User: '',
  };
  breadcrumb = new Breadcrumb();

  constructor(
    private userService: UserService,
    private router: Router,
    private container: ViewContainerRef
  ) {
    this.breadcrumb.title = 'User';
    this.breadcrumb.path = '/management/user';
    this.breadcrumb.breadcrumb = [
      {
        title: 'Home',
        path: '/',
        breadcrumb: [],
      },
      {
        title: 'User',
        path: '/management/user',
        breadcrumb: [],
      },
    ];
  }

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
    this.userService
      .getPageData(this.searchParam, '/search')
      .subscribe((res) => {
        this.paging = res.paging;

        this.paging.recordStart =
          this.paging.currentRecords < 1
            ? 0
            : (this.paging.pageNumber - 1) * this.paging.pageSize + 1;
        this.paging.recordEnd =
          this.paging.currentRecords < 1
            ? 0
            : this.paging.recordStart + this.paging.currentRecords - 1;

        let start = this.paging.recordStart;
        res.data.map((x: any) => {
          x.stt = start++;
          return x;
        });

        this.datasource = res.data;
      });
  }
  pageChange(value: any) {
    this.searchParam.pageNumber = value.number;
    this.searchParam.pageSize = value.size;
    this.getUser();
  }
  onClickSua(item?: User) {
    if (item) this.router.navigateByUrl('management/user/' + item.id);
    else this.router.navigateByUrl('management/user/' + 0);
  }
  onClickSuaPopup(title: string, item?: User) {
    this.renderModal({ title: title, item: item });
  }
  renderModal(data: any) {
    this.container.clear();
    this.componentRef = this.container.createComponent(UserPopupComponent);
    this.componentRef.setInput('data', data);
    this.componentRef.changeDetectorRef.detectChanges();
  }
  onDelete(item: User) {
    if (item)
      this.userService.delete(item.id).subscribe((res) => {
        this.getUser();
      });
  }
}
