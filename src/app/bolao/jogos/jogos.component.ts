import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css'],
})
export class JogosComponent implements OnInit {
  jogos: number[] = [1, 2, 3];

  constructor() {}

  ngOnInit(): void {}
}
