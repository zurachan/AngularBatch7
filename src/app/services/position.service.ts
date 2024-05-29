import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Position } from '../model/Position';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PositionService extends ApiService<Position> {
  constructor(private http2: HttpClient) {
    super(http2);
  }
}
