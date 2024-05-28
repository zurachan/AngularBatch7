import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  private _close$ = new Subject();
  public close$ = this._close$.asObservable();

  private _open$ = new Subject();
  public open$ = this._open$.asObservable();

  closeModal(reason?: any) {
    this._close$.next(reason);
  }

  openModal(formComp: any, data: any, open?: boolean) {
    this._open$.next({ formComp: formComp, data: data, open: open });
  }
}
