import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  constructor(private departmentService: DepartmentService) {}

  searchOption = {
    pageNumber: 1,
    pageSize: 2,
  };
  ngOnInit() {}

  getPageData() {
    this.departmentService
      .getPageData(this.searchOption, '/search')
      .subscribe((res) => {});
  }

  getById(id: number) {
    this.departmentService.getById(id).subscribe((res) => {});
  }
}
