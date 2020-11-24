import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerCartService } from '../services/beer-cart.service';
import { Beer } from '../modelos/Beer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //cartList: Beer[] = [];
  cartList$: Observable<Beer[]>;

  constructor(private cartService: BeerCartService) {
    //cartService.cartList.subscribe((c => this.cartList = c));
    this.cartList$ = cartService.cartList.asObservable();
  }

  ngOnInit(): void {
  }
}
