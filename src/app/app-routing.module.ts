import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BreweryBeersComponent } from './brewery-beers/brewery-beers.component';
// import { AuthComponent } from './auth/auth.component';
// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'beers', component: BreweryBeersComponent },
  { path: 'about', component: BreweryAboutComponent },
  // { path: 'login', component: AuthComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
