import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewApostaDialogComponent } from 'src/app/dialogs/new-aposta-dialog.component';
import { Grupo } from './Grupo';
import { GrupoService } from './grupos.service';
import { Jogo } from './Jogo';
import { JogosService } from './jogos.service';
import { Selecao } from './Selecao';
import { SelecaoService } from './selecao.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css'],
})
export class JogosComponent implements OnInit {
  grupos: Grupo[] = [];
  jogos: Jogo[] = [];
  jogosGrupoA: Jogo[] = [];

  constructor(
    private dialog: MatDialog,
    private gruposService: GrupoService,
    private jogosService: JogosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jogosService
      .findAllJogos()
      .subscribe((jogos: Jogo[]) =>
        jogos.forEach((jogo) => this.jogos.push(jogo))
      );
    console.log(this.jogos);

    this.jogosService
      .findAllJogosByGroupID(1)
      .subscribe((jogos: Jogo[]) =>
        jogos.forEach((jogo) => this.jogosGrupoA.push(jogo))
      );

    console.log(this.jogosGrupoA);
    this.gruposService
      .findAllGrupos()
      .subscribe((grupos: Grupo[]) =>
        grupos.forEach((grupo) => this.grupos.push(grupo))
      );
  }

  addAposta(idJogo: number, nomeSelecaoA: String, nomeSelecaoB: String) {
    this.dialog
      .open(NewApostaDialogComponent, {
        data: {
          idJogo: idJogo,
          nomeSelecaoA: nomeSelecaoA,
          nomeSelecaoB: nomeSelecaoB,
        },
        maxWidth: '100%',
        minWidth: '60%',
        maxHeight: '80%',
      })
      .afterClosed()
      .subscribe(() => this.router.navigateByUrl('bolao/jogos'));
  }

  changeGroup(id: number) {
    this.jogosService.findAllJogosByGroupID(id).subscribe(
      (jogos: Jogo[]) => (this.jogosGrupoA = jogos) //this.jogosGrupoA.push(jogo))
    );
  }
}
