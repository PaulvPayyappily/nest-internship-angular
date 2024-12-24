import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: any;

  constructor(private http:HttpClient) { }

  getProduct(){

    let data = this.http.get('https://dummyjson.com/products');
    return data; 

  }

  getProductsById(id:any){

    return this.http.get(`https://dummyjson.com/products/${id}`)
    
    }
}
