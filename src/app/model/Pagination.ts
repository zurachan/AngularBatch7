import { Response } from './Response';

export class PaginationResponse<T> extends Response<T> {
  Paging!: Pagination;
  override Data!: T;
  override Success!: boolean;
  override Message!: string;
}

export class Pagination {
  CurrentRecords!: number;
  FirstPage!: number;
  LastPage!: number;
  TotalPages!: number;
  TotalRecords!: number;
  NextPage!: number;
  PreviousPage!: number;
  PageSize!: number;
  PageNumber!: number;
}
