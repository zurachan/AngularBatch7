export class Response<T> {
  Success: boolean = false;
  Message!: string;
  Data!: T;
}
