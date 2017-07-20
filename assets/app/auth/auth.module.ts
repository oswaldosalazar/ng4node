import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { authRouting } from './auth.routing'

@NgModule({
  declarations:[
    LogoutComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    authRouting
  ]
})

export class AuthModule {

}