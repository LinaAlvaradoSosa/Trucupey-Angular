import { Component } from '@angular/core';
import { ProductsService } from '../../core/service/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CheckOutService } from '../../services/check-out.service';
import { Router } from '@angular/router';
import { CarritoService } from '../../service/carrito.service';


@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

    constructor(private productsService: ProductsService, private checkoutService: CheckOutService, private router: Router, private carritoService: CarritoService){}
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
  productos = [];

  comprarProducto(producto: any) {
    this.checkoutService.setProduct(producto); 
    this.router.navigate(['/checkout']); 
}
agregarAlCarrito(producto: any) {
  this.carritoService.agregarAlCarrito(producto); 
}
}