import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];
  private carritoSubject = new BehaviorSubject<number>(0); // Para actualizar el contador en la navbar

  constructor(private snackBar: MatSnackBar) {
    this.cargarCarrito();
  }

  /**
   * Verifica si estamos en el navegador y si localStorage está disponible.
   */
  private esNavegador(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  /**
   * Carga el carrito desde localStorage.
   */
  private cargarCarrito() {
    if (this.esNavegador()) {
      const carritoGuardado = localStorage.getItem('carrito');
      this.carrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];
      this.actualizarCantidad();
    }
  }

  /**
   * Guarda el carrito en localStorage.
   */
  private guardarCarrito() {
    if (this.esNavegador()) {
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }
  }

  /**
   * Agrega un producto al carrito.
   */
  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
    this.guardarCarrito();
    this.actualizarCantidad();

    // 🔥 **Aquí mostramos la notificación**
    this.snackBar.open('Producto agregado al carrito 🛒', 'Cerrar', {
      duration: 3000, // 3 segundos
      horizontalPosition: 'center', // Centro horizontal
      verticalPosition: 'bottom', // Abajo de la pantalla
    });
  }

  /**
   * Obtiene todos los productos del carrito.
   */
  obtenerCarrito() {
    return this.carrito;
  }

  /**
   * Obtiene la cantidad total de productos en el carrito.
   */
  obtenerCantidadTotal() {
    return this.carrito.length;
  }

  /**
   * Devuelve el contador del carrito como un Observable para actualizar la navbar.
   */
  obtenerCantidadObservable() {
    return this.carritoSubject.asObservable();
  }

  /**
   * Actualiza el contador del carrito.
   */
  actualizarCantidad() {
    this.carritoSubject.next(this.carrito.length);
  }

  /**
   * Elimina un producto del carrito por índice.
   */
  eliminarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
    this.guardarCarrito();
    this.actualizarCantidad();
  }

  /**
   * Vacía el carrito.
   */
  vaciarCarrito() {
    this.carrito = [];
    this.guardarCarrito();
    this.actualizarCantidad();
  }
}
