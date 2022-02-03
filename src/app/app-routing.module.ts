import { ProfileviewComponent } from './views/home/profileview/profileview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login/login.component';
import { RegisterComponent } from './views/register/register/register.component';
import { HomeComponent } from './views/home/home/home.component';
import { ResetpasswordComponent } from './views/login/resetpassword/resetpassword.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate:[LoginGuard]},
  {path: 'register', component: RegisterComponent, canActivate:[LoginGuard]},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'resetpassword', component: ResetpasswordComponent, canActivate:[LoginGuard]},
  {path : "profileview/:id", component: ProfileviewComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

