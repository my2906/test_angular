import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  /* lấy danh sách sp */
  getList():Observable<any>{
    return this.http.get<any>('http://localhost:3000/product');
  }
}
