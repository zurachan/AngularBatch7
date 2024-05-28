import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css'],
})
export class UserModalComponent implements OnInit, OnChanges {
  @Input('data') data: any;
  modal: any;
  user = new User();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.modal = this.data;
  }

  ngOnInit() {}
}
