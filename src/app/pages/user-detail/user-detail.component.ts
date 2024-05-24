import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  form!: FormGroup;
  user = new User();
  ngOnInit() {
    this.InitForm();
    let itemId = this.activedRoute.snapshot.params['id'];
    if (itemId) this.getUserById(itemId);
  }

  getUserById(Id: any) {
    this.userService.getById(Id).subscribe((res) => {
      this.user = res.data;
      this.bindValueForm();
    });
  }

  InitForm() {
    this.form = this.fb.group({
      id: [0],
      first_name: [null, [Validators.required, Validators.maxLength(20)]],
      last_name: [null, [Validators.required, Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.maxLength(100)]],
      avatar: [null],
    });
  }

  bindValueForm() {
    this.form.patchValue(this.user);
  }

  onSave() {
    let userForm = this.form.getRawValue();
    if (userForm.id) {
      this.userService.updateUser(userForm).subscribe((res) => {
        if (res.success) this.router.navigateByUrl('/user');
      });
    } else {
      this.userService.createUser(userForm).subscribe((res) => {
        if (res.success) this.router.navigateByUrl('/user');
      });
    }
  }

  onUploadCoverImage(event: any) {
    let file = event.target.files;
  }
}
