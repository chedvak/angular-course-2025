import { Component } from '@angular/core';
import { Products } from "../products/products";
import { Cart } from "../cart/cart";

@Component({
  selector: 'app-shopping-page',
  imports: [Products, Cart],
  templateUrl: './shopping-page.html',
  styleUrl: './shopping-page.css'
})
export class ShoppingPage {

}
