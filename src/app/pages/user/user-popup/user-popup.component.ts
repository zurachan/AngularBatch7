import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-popup',
  templateUrl: './user-popup.component.html',
  styleUrls: ['./user-popup.component.css'],
})
export class UserPopupComponent implements OnInit, OnChanges {
  @Input() data: any;
  form!: FormGroup;
  modal: any;
  user = new User();
  constructor(private userService: UserService, private fb: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.modal = this.data;
  }
  ngOnInit() {
    this.user = this.modal.item;
    this.InitForm();
    this.bindValueForm();
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
      this.userService.update(userForm.id, userForm).subscribe((res) => {
        this.onClose(true);
      });
    } else {
      this.userService.create(userForm).subscribe((res) => {
        this.onClose(true);
      });
    }
  }

  onClose(reason?: boolean) {
    this.userService.close(reason);
  }

  onUploadCoverImage(event: any) {}
}
