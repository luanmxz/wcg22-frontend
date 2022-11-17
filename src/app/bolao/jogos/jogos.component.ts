import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewApostaDialogComponent } from 'src/app/dialogs/new-aposta-dialog.component';
import { Grupo } from '../interfaces/Grupo';
import { GrupoService } from '../services/grupos.service';
import { Jogo } from '../interfaces/Jogo';
import { JogosService } from '../services/jogos.service';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/user/user-service/user.service';
import { filter } from 'rxjs';
import { ApostaService } from '../services/apostas.service';
import { Aposta } from '../interfaces/Aposta';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css'],
})
export class JogosComponent implements OnInit {
  grupos: Grupo[] = [];
  jogos: Jogo[] = [];
  currentUser!: User;
  jogosQueJaApostou: Aposta[] = [];

  constructor(
    private dialog: MatDialog,
    private gruposService: GrupoService,
    private jogosService: JogosService,
    private userService: UserService,
    private apostasService: ApostaService
  ) {
    this.userService.getUser().subscribe((user) => {
      this.getApostasByUser(user.id), (this.currentUser = user);
    });
  }

  ngOnInit(): void {
    this.jogosService
      .findAllJogosByGroupID(1)
      .subscribe((jogos: Jogo[]) => (this.jogos = jogos));

    this.gruposService
      .findAllGrupos()
      .subscribe((grupos: Grupo[]) =>
        grupos.forEach((grupo) => this.grupos.push(grupo))
      );
  }

  addAposta(
    idUser: number,
    idJogo: number,
    nomeSelecaoA: String,
    nomeSelecaoB: String
  ) {
    this.dialog
      .open(NewApostaDialogComponent, {
        data: {
          idUser: idUser,
          idJogo: idJogo,
          nomeSelecaoA: nomeSelecaoA,
          nomeSelecaoB: nomeSelecaoB,
        },
        maxWidth: '100%',
        minWidth: '60%',
        maxHeight: '80%',
      })
      .afterClosed()
      .subscribe({
        next: () => this.getApostasByUser(idUser),
        error: (err: Error) =>
          alert('Não permitido! Você já apostou nesse jogo!'),
      });
  }

  getApostasByUser(idUser: number) {
    this.apostasService
      .getApostasByUser(idUser)
      .subscribe((apostas: Aposta[]) =>
        apostas.forEach((aposta) => this.jogosQueJaApostou.push(aposta))
      );
  }

  jaApostou(idJogo: number) {
    return this.jogosQueJaApostou.find((jogo) => jogo.idJogo.id == idJogo);
  }

  changeGroup(id: number) {
    this.jogosService
      .findAllJogosByGroupID(id)
      .subscribe((jogos: Jogo[]) => (this.jogos = jogos));
  }
}
