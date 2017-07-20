import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './user.model';
import { AuthService } from './auth.service';
// import { AUTH_ROUTES } from './auth.routes';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(){
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this.authService.login(user)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this.router.navigateByUrl('/');
        },
        error => console.error(error)
      );
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
      ])
    })
  }
}