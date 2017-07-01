import { Routes } from '@angular/router';

import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';

export const AUTH_ROUTES: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];
