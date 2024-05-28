import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
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
}
