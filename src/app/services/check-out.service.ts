import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {
  constructor() { }
  private selectedProduct: any = null; 
  setProduct(product: any) {
    this.selectedProduct = product; 
  }
  getProduct() {
    return this.selectedProduct; 
  }
}
