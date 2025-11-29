import { Component, inject } from '@angular/core';
import { CartService } from '../CartService';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartService = new CartService();
  // cartService = inject(CartService);
}
