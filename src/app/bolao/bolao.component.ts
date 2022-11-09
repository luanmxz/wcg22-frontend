import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolao',
  templateUrl: './bolao.component.html',
  styleUrls: ['./bolao.component.css'],
})
export class BolaoComponent implements OnInit {
  listRodadas: string[] = ['Rodada 1', 'Rodada 2', 'Rodada 3'];
  listGrupos: string[] = [
    'Grupo A',
    'Grupo B',
    'Grupo C',
    'Grupo D',
    'Grupo E',
    'Grupo F',
    'Grupo G',
    'Grupo H',
  ];

  constructor() {}

  ngOnInit(): void {}

  getUserAdmin() {
    return false;
  }
}
