import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AdminPainelComponent } from './admin-painel/admin-painel.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './admin-painel/users/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { JogosAdminComponent } from './admin-painel/jogos/jogosadmin.component';
import { LogsComponent } from './admin-painel/logs/logs.component';

@NgModule({
  declarations: [
    AdminPainelComponent,
    UsersComponent,
    JogosAdminComponent,
    LogsComponent,
  ],
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
