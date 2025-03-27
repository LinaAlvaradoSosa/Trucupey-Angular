import { Component } from '@angular/core';
import { CarritoService } from '../../service/carrito.service';
import { CommonModule } from '@angular/common';
import { CheckOutService } from '../../services/check-out.service';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  productosCarrito: any[] = [];

  constructor(private carritoService: CarritoService, private checkoutService: CheckOutService, private router: Router ) {}

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.productosCarrito = this.carritoService.obtenerCarrito();
  }

  eliminarProducto(index: number) {
    this.carritoService.eliminarDelCarrito(index);
    this.cargarCarrito(); // Recargar la lista tras eliminar
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.cargarCarrito(); // Recargar la lista tras vaciar
  }
  comprarProducto(product: any) {
    this.checkoutService.setProduct(product); 
    this.router.navigate(['/checkout']); 
  }
}  
