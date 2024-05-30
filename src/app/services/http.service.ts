import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseUrl;
export interface RequestOptions {
  data?: any;
  params?: { [param: string]: string | string[] | boolean | number };
}
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(path: string, data?: any): Observable<any> {
    return this.processResponse(this.httpClient.get(baseApiUrl + path));
  }
  post(path: string, data?: any): Observable<any> {
    return this.processResponse(this.httpClient.post(baseApiUrl + path, data));
  }

  put(path: string, data?: any): Observable<any> {
    return this.processResponse(this.httpClient.put(baseApiUrl + path, data));
  }

  delete(path: string, data?: any): Observable<any> {
    return this.processResponse(this.httpClient.delete(baseApiUrl + path));
  }

  private processResponse(responseOb: Observable<any>): Observable<any> {
    return responseOb.pipe(
      map((response) => {
        if (response.status === 200) {
          return response.body;
        }
        throwError(() => response);
      })
    );
  }
}
