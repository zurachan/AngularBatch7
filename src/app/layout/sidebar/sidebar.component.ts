import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterContentChecked {
  menu = [
    {
      path: 'management',
      title: 'Quản lý chung',
      children: [
        { path: 'user', title: 'Nhân viên' },
        { path: 'department', title: 'Phòng ban' },
        { path: 'position', title: 'Chức vụ' },
      ],
    },
    {
      path: 'business',
      title: 'Nghiệp vụ',
      children: [
        { path: 'product', title: 'Sản phẩm' },
        { path: 'warehouse', title: 'Kho hàng' },
      ],
    },
  ];

  current = [];

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.current = event.url.split('/').filter(Boolean);
      }
    });
  }
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  getClass(item: any): boolean {
    return this.current.some((x) => x == item.path);
  }
}
