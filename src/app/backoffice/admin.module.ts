import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AdminPainelComponent } from './admin-painel/admin-painel.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './admin-painel/users/users.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminLoginComponent, AdminPainelComponent, UsersComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    RouterModule,
    AdminRoutingModule,
  ],
  exports: [],
})
export class AdminModule {}
