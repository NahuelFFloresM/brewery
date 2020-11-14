import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from './beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
    {
      name: 'Negra Fuerte',
      type: 'Porter',
      price: 180,
      stock: 5,
      image: 'assets/img/porter.jpeg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Red Red Wine',
      type: 'Barley Wine',
      price: 200,
      stock: 3,
      image: 'assets/img/porter.jpeg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Yellow Submarine',
      type: 'Golden Ale',
      price: 180,
      stock: 0,
      image: 'assets/img/porter.jpeg',
      clearance: false,
      quantity: 0,
    }
  ];


  constructor(private cart: BeerCartService) {
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  maxReached(m: string){
    alert(m);
  }

  addToCart(beer){
    if (beer.quantity > 0){
      this.cart.addToCart(beer);
      beer.stock -=  beer.quantity;
      beer.quantity = 0;
    }
  }

}
