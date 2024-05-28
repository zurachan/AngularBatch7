import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/ApiResponse';
import { PaginationResponse } from '../model/Pagination';
import { User } from '../model/User';

const url = environment.baseUrl;
const endPoint = 'User';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private _close$ = new Subject();
  public close$ = this._close$.asObservable();
  close(reason?: any) {
    this._close$.next(reason);
  }

  getUsers(searchParam: any): Observable<PaginationResponse<User[]>> {
    return this.http.post<PaginationResponse<User[]>>(
      `${url + endPoint + '/search'}`,
      searchParam
    );
  }

  getById(Id: number): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${url + endPoint + '/' + Id}`);
  }

  createUser(user: User): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${url + endPoint}`, user);
  }

  updateUser(user: User): Observable<ApiResponse<User>> {
    return this.http.put<ApiResponse<User>>(
      `${url + endPoint + '/' + user.id}`,
      user
    );
  }

  deleteUser(Id: number): Observable<ApiResponse<boolean>> {
    return this.http.delete<ApiResponse<boolean>>(
      `${url + endPoint + '/' + Id}`
    );
  }
}
