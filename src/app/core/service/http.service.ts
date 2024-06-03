import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(path: string, data?: any): Observable<any> {
    return this.processResponse(
      this.httpClient.get(`${baseApiUrl}${path}`, { params: data })
    );
  }
  post(path: string, data?: any): Observable<any> {
    return this.processResponse(
      this.httpClient.post(`${baseApiUrl}${path}`, data)
    );
  }

  put(path: string, data?: any): Observable<any> {
    return this.processResponse(
      this.httpClient.put(`${baseApiUrl}${path}`, data)
    );
  }

  delete(path: string): Observable<any> {
    return this.processResponse(this.httpClient.delete(`${baseApiUrl}${path}`));
  }

  private processResponse(responseOb: Observable<any>): Observable<any> {
    return responseOb.pipe(
      map((response) => {
        if (response.success) {
          return response;
        }
        throwError(() => response);
      })
    );
  }
}
