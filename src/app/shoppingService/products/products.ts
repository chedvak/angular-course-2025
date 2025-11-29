import { Component, inject } from '@angular/core';
import { CartService } from '../CartService';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  cartService = new CartService();
    // cartService = inject(CartService);


}
