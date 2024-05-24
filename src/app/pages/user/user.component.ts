import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationResponse } from 'src/app/model/Pagination';
import { User } from '../../model/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  paginationRes = new PaginationResponse<User[]>();
  searchParam = {
    pageNumber: 1,
    pageSize: 5,
    User: '',
  };
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userService.getUsers(this.searchParam).subscribe((res) => {
      this.paginationRes = res;
    });
  }
  onClickSua(item?: User) {
    if (item) this.router.navigateByUrl('user/' + item.id);
    else this.router.navigateByUrl('user/' + 0);
  }
  onClickSuaPopup() {}
  onDelete(item: User) {
    if (item)
      this.userService.deleteUser(item.id).subscribe((res) => {
        this.getUser();
      });
  }
}
