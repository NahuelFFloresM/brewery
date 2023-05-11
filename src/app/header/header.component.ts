import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Brewery';
  isLogged = false;
  userSubscription = new BehaviorSubject<User>(null);
  constructor(private LoginService: AuthService) { }

  ngOnInit(): void {
    this.LoginService.autoLogin();
    this.userSubscription = this.LoginService.getUser();
    if (!!this.userSubscription.getValue()){
      this.isLogged = true;
    }
    console.log(this.userSubscription.getValue());
  }

  onLogout(): void{
    this.LoginService.logout();
  }

}
