import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BolaoComponent } from './bolao.component';
import { JogosComponent } from './jogos/jogos.component';
import { TabelaClassificacaoComponent } from './tabela-classificacao/tabela-classificacao.component';
import { RankingComponent } from './ranking/ranking.component';
import { ApostasComponent } from './apostas/apostas.component';
import { LoginGuard } from '../core/auth/login.guard';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BolaoRoutingModule {}
