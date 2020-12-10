import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../modelos/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerCartService {

  constructor() { }

  private _cartList: Beer[] = [];
  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject([]);

  addToCart(beer: Beer): void {
    let item: Beer = this._cartList.find((v1) => v1.name === beer.name);
    if (!item){
      this._cartList.push({... beer});
    } else {
      item.quantity += beer.quantity;
    }
    this.cartList.next(this._cartList);
  }


}
