import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../core/auth/login.guard';
import { AdminPainelComponent } from './admin-painel/admin-painel.component';
import { JogosAdminComponent } from './admin-painel/jogos/jogosadmin.component';
import { LogsComponent } from './admin-painel/logs/logs.component';
import { UsersComponent } from './admin-painel/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPainelComponent,
    //canActivate: [LoginGuard],
    children: [
      {
        path: 'users',
        component: UsersComponent,
        data: { title: 'Admin - Users' },
      },
      {
        path: 'logs',
        component: LogsComponent,
        data: { title: 'Admin - Logs' },
      },
      {
        path: 'admin-jogos',
        component: JogosAdminComponent,
        data: { title: 'Admin - Jogos' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
