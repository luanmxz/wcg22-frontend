import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Jogo } from 'src/app/bolao/interfaces/Jogo';
import { JogosService } from 'src/app/bolao/services/jogos.service';
import { SetResultJogoDialog } from 'src/app/dialogs/dialog-set-resultado-jogo/set-result-jogo-dialog.component';

@Component({
  selector: 'app-jogosadmin',
  templateUrl: './jogosadmin.component.html',
  styleUrls: ['./jogosadmin.component.css'],
})
export class JogosAdminComponent implements OnInit {
  jogos: Jogo[] = [];

  constructor(
    private jogosService: JogosService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jogosService
      .findAllJogos()
      .subscribe((jogos: Jogo[]) => jogos.forEach((j) => this.jogos.push(j)));
    console.log(this.jogos);
  }

  update(idJogo: number, nomeSelecaoA: String, nomeSelecaoB: String) {
    this.dialog
      .open(SetResultJogoDialog, {
        data: {
          idJogo: idJogo,
          nomeSelecaoA: nomeSelecaoA,
          nomeSelecaoB: nomeSelecaoB,
        },
        maxWidth: '100%',
        minWidth: '60%',
        maxHeight: '80%',
      })
      .afterClosed();
  }
}
