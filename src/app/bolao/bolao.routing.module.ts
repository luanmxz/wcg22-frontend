import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BolaoComponent } from './bolao.component';
import { JogosComponent } from './jogos/jogos.component';
import { TabelaClassificacaoComponent } from './tabela-classificacao/tabela-classificacao.component';
import { RankingComponent } from './ranking/ranking.component';
import { ApostasComponent } from './apostas/apostas.component';
import { AdminGuard } from '../core/auth/admin.guard';
import { AdminPainelComponent } from '../backoffice/admin-painel/admin-painel.component';
import { LogsComponent } from '../backoffice/admin-painel/logs/logs.component';
import { JogosAdminComponent } from '../backoffice/admin-painel/jogos/jogosadmin.component';
import { UsersComponent } from '../backoffice/admin-painel/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: BolaoComponent,
    children: [
      {
        path: 'jogos',
        component: JogosComponent,
        data: { title: 'Jogos da Copa' },
      },
      {
        path: 'tabela-classificacao',
        component: TabelaClassificacaoComponent,
        data: { title: 'Tabela de Classificação das Seleções' },
      },
      {
        path: 'ranking',
        component: RankingComponent,
        data: { title: 'Ranking dos usuários' },
      },
      {
        path: 'minhas-apostas',
        component: ApostasComponent,

        data: { title: 'Minhas apostas' },
      },
      {
        path: 'painel-admin',
        component: AdminPainelComponent,
        canActivate: [AdminGuard],
        data: { title: 'Painel Administrativo' },
        children: [
          {
            path: 'users',
            component: UsersComponent,
            canActivate: [AdminGuard],
            data: { title: 'Admin - Users' },
          },
          {
            path: 'logs',
            component: LogsComponent,
            canActivate: [AdminGuard],
            data: { title: 'Admin - Logs' },
          },
          {
            path: 'jogos',
            component: JogosAdminComponent,
            canActivate: [AdminGuard],
            data: { title: 'Admin - Jogos' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BolaoRoutingModule {}
