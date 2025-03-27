import { Component, inject } from '@angular/core';
import { ProductsService } from '../../core/service/products.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CheckOutService } from '../../services/check-out.service';
import { Router } from '@angular/router';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

  constructor(private productsService: ProductsService,
              private checkoutService: CheckOutService,
              private carritoService: CarritoService,
              private router: Router) {}
  products! :any
  
  
  ngOnInit () {
    this.productsService.getProducts().subscribe({
            next:(resApi : any)=> {
                this.products = resApi.products
            },
            error:(error: any)=>{
                console.log(error);
            }
        })
  }

  comprarProducto(product: any) {
    this.checkoutService.setProduct(product); 
    this.router.navigate(['/checkout']); 
  }
  agregarAlCarrito(producto: any) {
    this.carritoService.agregarAlCarrito(producto); 
  }
}
