import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BolaoComponent } from './bolao.component';
import { JogosComponent } from './jogos/jogos.component';
import { TabelaClassificacaoComponent } from './tabela-classificacao/tabela-classificacao.component';
import { RankingComponent } from './ranking/ranking.component';
import { ApostasComponent } from './apostas/apostas.component';

const routes: Routes = [
  {
    path: '',
    component: BolaoComponent,
    children: [
      { path: 'jogos', component: JogosComponent },
      { path: 'tabela-classificacao', component: TabelaClassificacaoComponent },
      { path: 'ranking', component: RankingComponent },
      { path: 'minhas-apostas', component: ApostasComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BolaoRoutingModule {}
