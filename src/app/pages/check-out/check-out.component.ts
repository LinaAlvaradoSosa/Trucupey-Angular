import { Component } from '@angular/core';
import { CheckOutService } from '../../services/check-out.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {
  selectedProduct: any;

  constructor(private checkoutService: CheckOutService) {}

  ngOnInit() {
    this.selectedProduct = this.checkoutService.getProduct();
  }
}