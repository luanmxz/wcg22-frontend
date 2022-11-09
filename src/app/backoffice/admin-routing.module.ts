import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPainelComponent } from './admin-painel/admin-painel.component';
import { UsersComponent } from './admin-painel/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPainelComponent,
    children: [{ path: 'users', component: UsersComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
