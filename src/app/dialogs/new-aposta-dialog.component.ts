import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApostaService } from '../bolao/services/apostas.service';

@Component({
  selector: 'app-new-aposta-dialog',
  templateUrl: './new-aposta-dialog.component.html',
  styleUrls: ['./new-aposta-dialog.component.css'],
})
export class NewApostaDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apostasService: ApostaService,
    private formBuilder: FormBuilder
  ) {}

  novaApostaForm!: FormGroup;
  nomeSelecaoA!: String;
  nomeSelecaoB!: String;
  empate: String = 'EMPATE';
  idJogo!: number;
  idUser!: number;

  ngOnInit(): void {
    (this.idUser = this.data.idUser),
      (this.nomeSelecaoA = this.data.nomeSelecaoA),
      (this.nomeSelecaoB = this.data.nomeSelecaoB),
      (this.idJogo = this.data.idJogo),
      (this.novaApostaForm = this.formBuilder.group({
        apostouEm: ['', Validators.required],
      }));
  }

  save() {
    let apostouEm = this.novaApostaForm.controls['apostouEm'].value;
    if (apostouEm == this.data.nomeSelecaoA) apostouEm = 'A';
    if (apostouEm == this.data.nomeSelecaoB) apostouEm = 'B';
    if (apostouEm == this.empate) apostouEm = 'E';
    console.log('aposta criado com o valor de: ' + apostouEm);
    this.apostasService
      .createAposta(apostouEm, this.idUser, this.idJogo)
      .subscribe(() => alert('Aposta realizada com sucesso!'));
  }
}
