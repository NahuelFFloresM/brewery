import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/modelos/beer';

@Component({
  selector: 'app-beer-cart-items',
  templateUrl: './beer-cart-items.component.html',
  styleUrls: ['./beer-cart-items.component.scss']
})
export class BeerCartItemsComponent implements OnInit {

  @Input()
  beer: Beer;

  constructor() { }

  ngOnInit(): void {

  }

}
