import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { CartComponent } from './cart/cart.component';
import { BreweryBeersComponent } from './brewery-beers/brewery-beers.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeerInfoModalComponent } from './beer-info-modal/beer-info-modal.component';
// import { AuthComponent } from './auth/auth.component';
import { BeerCartItemsComponent } from './cart/beer-cart-items/beer-cart-items.component';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './shared/alert/alert.component';

import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BreweryAboutComponent,
    CartComponent,
    BreweryBeersComponent,
    InputIntegerComponent,
    HomeComponent,
    BeerInfoModalComponent,
    BeerCartItemsComponent,
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
