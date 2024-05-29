import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/model/Breadcrumb';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  breadcrumb = new Breadcrumb();
  constructor() {
    this.breadcrumb.title = '404 Error Page';
    this.breadcrumb.path = '';
    this.breadcrumb.breadcrumb = [
      {
        title: 'Home',
        path: '',
        breadcrumb: [],
      },
      {
        title: '404 Error Page',
        path: '',
        breadcrumb: [],
      },
    ];
  }

  ngOnInit() {}
}
