import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { PaginationResponse } from 'src/app/model/Pagination';

export interface IBaseService<T> {
  getPageData(url?: string): Observable<PaginationResponse<T[]>>;
  getById(id: number, url?: string): Observable<ApiResponse<T>>;
  create(data?: T, url?: string): Observable<ApiResponse<T>>;
  update(id: number, data: T, url?: string): Observable<ApiResponse<T>>;
  delete(id: number, url?: string): Observable<boolean>;
}
