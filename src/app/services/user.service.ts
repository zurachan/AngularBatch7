import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { ServicePath } from '../core/decorator/service.decorator';
import { User } from '../model/User';
import { BaseService } from '../core/service/base.service';

@Injectable({
  providedIn: 'root',
})
@ServicePath('User')
export class UserService extends BaseService<User> {
  constructor(injector: Injector) {
    super(injector);
  }

  private _close$ = new Subject();
  public close$ = this._close$.asObservable();
  close(reason?: any) {
    this._close$.next(reason);
  }
}
