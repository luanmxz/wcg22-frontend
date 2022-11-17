import { Component, OnInit } from '@angular/core';
import { Selecao } from '../interfaces/Selecao';
import { SelecaoService } from '../services/selecao.service';

@Component({
  selector: 'app-tabela-classificacao',
  templateUrl: './tabela-classificacao.component.html',
  styleUrls: ['./tabela-classificacao.component.css'],
})
export class TabelaClassificacaoComponent implements OnInit {
  selecoes: Selecao[] = [];
  order: string = 'pontos';

  constructor(private selecaoService: SelecaoService) {}

  ngOnInit(): void {
    this.selecaoService
      .findAllSelecoes()
      .subscribe((selecao: Selecao[]) =>
        selecao.forEach((s) => this.selecoes.push(s))
      );
  }
}
