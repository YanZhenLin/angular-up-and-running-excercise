import {Product} from './product';

export class Cart {
  public product: Product;
  public itemCount: number;
  constructor(product){
    this.product = product;
    this.itemCount = 0;
  }
  isCartEmpty(): boolean {
    return this.itemCount === 0;
  }
}
