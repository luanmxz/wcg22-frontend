import { Component, OnInit } from '@angular/core';
import { Grupo } from '../interfaces/Grupo';
import { GrupoService } from '../services/grupos.service';
import { Jogo } from '../interfaces/Jogo';
import { JogosService } from '../services/jogos.service';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/user/user-service/user.service';
import { ApostaService } from '../services/apostas.service';
import { Aposta } from '../interfaces/Aposta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/notification/notification.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css'],
})
export class JogosComponent implements OnInit {
  novaApostaForm!: FormGroup;
  grupos: Grupo[] = [];
  jogos: Jogo[] = [];
  currentUser!: User;
  jogosQueJaApostou: Aposta[] = [];

  constructor(
    private gruposService: GrupoService,
    private jogosService: JogosService,
    private userService: UserService,
    private apostasService: ApostaService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
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

    this.novaApostaForm = this.formBuilder.group({
      apostouEm: ['', Validators.required],
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

  save(data: any, idJogo: number) {
    this.apostasService
      .createAposta(data, this.currentUser.id, idJogo)
      .subscribe({
        next: () => {
          this.notificationService.success(
            'Sucesso',
            'Aposta realizada com sucesso'
          ),
            this.getApostasByUser(this.currentUser.id);
        },
        error: (err: Error) => {
          this.notificationService.error(
            'Erro!',
            'Não foi possível confirmar a aposta, tente novamente!'
          );
        },
      });
  }
}
