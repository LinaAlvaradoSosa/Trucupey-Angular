import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../../service/carrito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cantidadCarrito: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.obtenerCantidadObservable().subscribe(cantidad => {
      this.cantidadCarrito = cantidad;
    });
  }
}
