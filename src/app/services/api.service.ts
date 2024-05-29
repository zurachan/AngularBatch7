import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationResponse } from './../model/Pagination';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService<T> {
  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;
  getPagination(param: any): Observable<PaginationResponse<T[]>> {
    return this.http.post<PaginationResponse<T[]>>(this.baseUrl, param);
  }
}
