import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService, AuthResponseData } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  onRegister = false;
  error: string = null;

  constructor(private authService: AuthService) { }

  showRegister(): void{
    this.onRegister = !this.onRegister;
  }

  onSubmit(form: NgForm): void {
    // Validation in case of HTML changes
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    // this.isLoading = true;

    if (!this.onRegister) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );

    form.reset();
  }

  onHandleError(): void{
    this.error = null;
  }

}
