import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Jogo } from 'src/app/bolao/interfaces/Jogo';
import { ApostaService } from 'src/app/bolao/services/apostas.service';
import { NotificationService } from 'src/app/notification/notification.service';

@Component({
  selector: 'app-new-aposta-dialog',
  templateUrl: './new-aposta-dialog.component.html',
  styleUrls: ['./new-aposta-dialog.component.css'],
})
export class NewApostaDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apostasService: ApostaService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) {}

  novaApostaForm!: FormGroup;
  nomeSelecaoA!: String;
  nomeSelecaoB!: String;
  empate: String = 'EMPATE';
  idJogo!: number;

  ngOnInit(): void {
    (this.nomeSelecaoA = this.data.jogo.idTimeA.nomeSelecao),
      (this.nomeSelecaoB = this.data.jogo.idTimeB.nomeSelecao),
      (this.idJogo = this.data.jogo.id),
      (this.novaApostaForm = this.formBuilder.group({
        apostouEm: ['', Validators.required],
      }));
  }

  save(apostouEm: string, idJogo: number) {
    this.apostasService
      .createAposta(apostouEm, this.data.currentUserId, idJogo)
      .subscribe({
        next: () => {
          this.notificationService.success(
            'Sucesso',
            'Aposta realizada com sucesso'
          );
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
