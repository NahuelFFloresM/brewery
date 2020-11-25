import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../services/beer-cart.service';
import { Beer } from '../modelos/Beer';
import { BeerDataService } from '../services/beer-data.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [];


  constructor(private cart: BeerCartService, private beerService: BeerDataService) {

   }

  ngOnInit(): void {
    this.beerService.getAll().subscribe( new_beers => {
      this.beers = new_beers;
    });
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
