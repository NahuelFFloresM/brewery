import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot): boolean  | UrlTree  | Promise<boolean | UrlTree > | Observable< boolean | UrlTree > {
    return this.authService.user.pipe(
      take(1),
      map( user => {
        const isAuth = !!user;
      // Convert value to boolean.
      // return !!user;
      // VARIACION-----
        if (isAuth){
          return true;
        }
        return this.router.createUrlTree(['/login']);
      // }), tap( isAuth => {
      //   if (!isAuth){
      //     this.router.navigate(['/login']);
      //   }
      // })
      })
    );
  }
}
