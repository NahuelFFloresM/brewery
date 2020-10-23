import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { CartComponent } from './cart/cart.component';
import { BreweryBeersComponent } from './brewery-beers/brewery-beers.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BreweryAboutComponent,
    CartComponent,
    BreweryBeersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
