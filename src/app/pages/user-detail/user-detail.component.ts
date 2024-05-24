import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  form!: FormGroup;
  user = new User();
  ngOnInit() {
    this.InitForm();
    let itemId = this.activedRoute.snapshot.params['id'];
    this.getUserById(itemId);
  }

  getUserById(Id: any) {
    this.userService.getById(Id).subscribe((res) => {
      this.user = res.data;
      console.log(this.user);
      this.bindValueForm();
    });
  }

  InitForm() {
    this.form = this.fb.group({
      id: [0],
      first_name: [null, [Validators.required, Validators.maxLength(10)]],
      last_name: [null, Validators.required],
      email: [null, Validators.required],
      avatar: [null],
    });
  }

  bindValueForm() {
    this.form.patchValue(this.user);
  }

  onSave() {
    let valueForm = this.form.getRawValue();
    console.log(valueForm);
  }

  onUploadCoverImage(file: any) {}
}
