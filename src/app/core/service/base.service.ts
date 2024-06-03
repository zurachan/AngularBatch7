import { Injectable, Injector } from '@angular/core';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { ApiResponse } from '../../model/ApiResponse';
import { PaginationResponse } from '../../model/Pagination';
import { HttpService } from './http.service';
import { IBaseService } from './ibase.service';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> extends RequestService implements IBaseService<T> {
  protected override httpService: HttpService;
  public servicePath: string;
  constructor(protected override injector: Injector) {
    super(injector);
  }
  getPageData(data?: any, url?: string): Observable<PaginationResponse<T[]>> {
    let urlRequest =
      url === undefined || url === null
        ? this.servicePath
        : this.servicePath + url;

    return this.httpService.get(urlRequest, data).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
      finalize(() => {})
    );
  }

  getById(id: number, url?: string): Observable<ApiResponse<T>> {
    let urlRequest =
      url === undefined || url === null
        ? this.servicePath
        : this.servicePath + url;
    return this.httpService.get(`${urlRequest}/${id}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
      finalize(() => {})
    );
  }

  create(data?: T, url?: string): Observable<ApiResponse<T>> {
    let urlRequest =
      url === undefined || url === null
        ? this.servicePath
        : this.servicePath + url;
    return this.httpService.post(`${urlRequest}`, data).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
      finalize(() => {})
    );
  }

  update(id: number, data: T, url?: string): Observable<ApiResponse<T>> {
    let urlRequest =
      url === undefined || url === null
        ? this.servicePath
        : this.servicePath + url;
    return this.httpService.put(`${urlRequest}/${id}`, data).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
      finalize(() => {})
    );
  }

  delete(id: number, url?: string): Observable<boolean> {
    let urlRequest =
      url === undefined || url === null
        ? this.servicePath
        : this.servicePath + url;
    return this.httpService.delete(`${urlRequest}/${id}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
      finalize(() => {})
    );
  }
}
