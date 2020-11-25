import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BeerCartService } from '../services/beer-cart.service';
import { BeerInfoModalComponent } from '../beer-info-modal/beer-info-modal.component';
import { Beer } from '../modelos/Beer';
import { BeerDataService } from '../services/beer-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit, OnDestroy{

  beers: Beer[] = [];
  beerServiceSubcription: Subscription;
  @ViewChild('myModal') modal: BeerInfoModalComponent;


  constructor(private cart: BeerCartService, private beerService: BeerDataService) {

  }

  ngOnInit(): void {
    this.beerServiceSubcription = this.beerService.getAll().subscribe( newbeers => {
      this.beers = newbeers;
    });
  }

  // tslint:disable-next-line:typedef
  maxReached(m: string){
    alert(m);
  }

  addToCart(beer: Beer): void{
    if (beer.quantity > 0){
      this.cart.addToCart(beer);
      beer.stock -=  beer.quantity;
      beer.quantity = 0;
    }
  }

  open(beer: Beer): void {
    // open the modal
    this.modal.open(beer);
  }

  ngOnDestroy(): void{
    this.beerServiceSubcription.unsubscribe();
  }


}
