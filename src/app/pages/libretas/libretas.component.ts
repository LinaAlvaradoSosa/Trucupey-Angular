import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../core/service/products.service';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { CheckOutService } from '../../services/check-out.service';
import { Router } from '@angular/router';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-libretas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libretas.component.html',
  styleUrl: './libretas.component.css'
})
export class LibretasComponent {
  constructor(private productsService: ProductsService, private route: ActivatedRoute, private checkoutService: CheckOutService, private router: Router, private carritoService: CarritoService ){}
  products: any = [];

  ngOnInit() {
    this.route.url.subscribe((segments) => {
      const type = segments[0]?.path; 
      if (type) {
        this.productsByType(type);
      }
    });
  }

  productsByType(type: string) {
    this.productsService.getProductsByType(type).subscribe({
      next: (resApi: any) => {    
        this.products = resApi;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  comprarProducto(product: any) {
    this.checkoutService.setProduct(product); 
    this.router.navigate(['/checkout']); 
  }
  agregarAlCarrito(producto: any) {
    this.carritoService.agregarAlCarrito(producto); 
  }
}

