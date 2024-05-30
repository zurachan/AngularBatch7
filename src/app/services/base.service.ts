import { Injectable, Injector } from '@angular/core';
import { HttpService } from './http.service';
import { IBaseService } from './ibase.service';
import { RequestService } from './request.service';
import { catchError, finalize, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> extends RequestService implements IBaseService<T> {
  protected override httpService: HttpService;
  constructor(protected override injector: Injector) {
    super(injector);
  }
  getAll(url?: string) {
    return this.httpService.get(url, {}).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
      finalize(() => {})
    );
  }
}
