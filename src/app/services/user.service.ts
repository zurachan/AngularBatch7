import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const url = environment.baseUrl;
const endPoint = 'users';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get<any>(url + endPoint, {});
  }

  getById(Id: number): Observable<any> {
    return this.http.get<any>(`${url + endPoint + '/' + Id}`, {});
  }
}
