import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Beer } from '../modelos/beer';

const URL = 'https://5fbe69505923c90016e6b002.mockapi.io';

@Injectable({
  providedIn: 'root'
})


export class BeerDataService {

  /*beers: Beer[] = [
    {
      name: 'Negra Fuerte',
      type: 'Porter',
      price: 180,
      stock: 5,
      image: 'assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Red Red Wine',
      type: 'Barley Wine',
      price: 200,
      stock: 3,
      image: 'assets/img/porter.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Yellow Submarine',
      type: 'Golden Ale',
      price: 180,
      stock: 0,
      image: 'assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    }
  ];*/

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Beer[]>{
    return this.http.get<Beer[]>(URL + '/Beer').pipe(
      tap((beers: Beer[]) => beers.forEach(beer => beer.quantity = 0))
    );
    //return this.beers;
  }
}
