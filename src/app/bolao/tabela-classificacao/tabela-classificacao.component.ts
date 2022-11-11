import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Selecao } from '../jogos/Selecao';
import { SelecaoService } from '../jogos/selecao.service';

@Component({
  selector: 'app-tabela-classificacao',
  templateUrl: './tabela-classificacao.component.html',
  styleUrls: ['./tabela-classificacao.component.css'],
})
export class TabelaClassificacaoComponent implements OnInit {
  selecoes: Selecao[] = [];

  constructor(
    private http: HttpClient,
    private selecaoService: SelecaoService
  ) {}

  ngOnInit(): void {
    this.selecaoService
      .findAllSelecoes()
      .subscribe((selecao: Selecao[]) =>
        selecao.forEach((s) => this.selecoes.push(s))
      );
    console.log(this.selecoes);
  }
}
