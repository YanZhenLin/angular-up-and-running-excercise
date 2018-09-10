import { Component, OnInit } from '@angular/core';
import { Product  } from '../../model/Product';
import { Cart } from '../../model/Cart';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  public cart: Cart;
  constructor() { }

  ngOnInit() {
    this.cart = new Cart( new Product('Rubber Ducky', 3.75, true) );
  }
  subtractItemFromCart(){
    this.cart.itemCount--;
  }
  addItemToCart(){
    this.cart.itemCount++;
  }
}
