import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BolaoComponent } from './bolao.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { BolaoRoutingModule } from './bolao.routing.module';
import { JogosComponent } from './jogos/jogos.component';
import { TabelaClassificacaoComponent } from './tabela-classificacao/tabela-classificacao.component';
import { RankingComponent } from './ranking/ranking.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ApostasComponent } from './apostas/apostas.component';
import { OrderModule } from 'ngx-order-pipe';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BolaoComponent,
    JogosComponent,
    TabelaClassificacaoComponent,
    RankingComponent,
    ApostasComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    BolaoRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
    OrderModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class BolaoModule {}
