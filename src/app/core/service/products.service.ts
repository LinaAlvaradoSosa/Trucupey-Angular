import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURL: string = "http://localhost:3000/api"


  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get(`${this.apiURL}/products`)
  }
  getProductsByType(type:string){
    return this.http.get(`${this.apiURL}/products/${type}`)
  }
  deleteProduct(id: string){
    return this.http.delete(`${this.apiURL}/deleteProduct/${id}`)
  }
  getOneProduct(id: string){
    return this.http.get(`${this.apiURL}/product/${id}`)
  }
  updateProduct(id:string, body :any){
    return this.http.put(`${this.apiURL}/updateProduct/${id}`, body)
  }
  createProduct(body: any){
    return this.http.post(`${this.apiURL}/createProduct`, body)
  }
  getProductsByName(nombre: string){
    return this.http.get(`${this.apiURL}/getProductsByName/${nombre}`)
  }
}
