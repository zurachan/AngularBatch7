import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class RequestService extends BehaviorSubject<any> {
  protected httpService: HttpService;

  constructor(protected injector: Injector) {
    super(null);
    this.httpService = this.injector.get(HttpService);
  }
}
