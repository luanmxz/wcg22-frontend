import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { title: 'Homepage' },
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: { title: 'Login' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
    data: { title: 'Register' },
  },
  {
    path: 'admin-painel',
    data: { title: 'Admin-area' },
    loadChildren: () =>
      import('./backoffice/admin.module').then((m) => m.AdminModule),
  },

  {
    path: 'bolao',
    data: { title: 'Bolao' },
    loadChildren: () =>
      import('./bolao/bolao.module').then((m) => m.BolaoModule),
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { title: 'Forgot-password' },
  },
  {
    path: 'change-password',
    component: ResetPasswordComponent,
    data: { title: 'Change password' },
  },
  { path: '**', component: NotFoundComponent, data: { title: 'Not-Found' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
