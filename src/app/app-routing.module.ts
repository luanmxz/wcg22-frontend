import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './backoffice/admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { ConfirmRegisterComponent } from './user/confirm-register/confirm-register.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminLoginComponent },
  {
    path: 'admin-painel',
    loadChildren: () =>
      import('./backoffice/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'bolao',
    loadChildren: () =>
      import('./bolao/bolao.module').then((m) => m.BolaoModule),
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'confirm-register', component: ConfirmRegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
