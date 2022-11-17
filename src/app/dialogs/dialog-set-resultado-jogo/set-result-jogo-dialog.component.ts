import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JogosService } from '../../bolao/services/jogos.service';

@Component({
  selector: 'app-set-result-jogo-dialog',
  templateUrl: './set-result-jogo-dialog.component.html',
  styleUrls: ['./set-result-jogo-dialog.component.css'],
})
export class SetResultJogoDialog implements OnInit {
  setResultForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private jogosService: JogosService
  ) {}

  ngOnInit(): void {
    this.setResultForm = this.formBuilder.group({
      golsA: ['', Validators.required],
      golsB: ['', Validators.required],
      resultado: ['', Validators.required],
    });
  }

  updateJogoById(dados: any) {
    this.jogosService.updateJogoByID(dados).subscribe();
  }
}
