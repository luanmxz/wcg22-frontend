import { Component, OnInit } from '@angular/core';
import { Aposta } from './Aposta';
import { ApostaService } from './apostas.service';

@Component({
  selector: 'app-apostas',
  templateUrl: './apostas.component.html',
  styleUrls: ['./apostas.component.css'],
})
export class ApostasComponent implements OnInit {
  apostas: Aposta[] = [];

  constructor(private apostasService: ApostaService) {}

  ngOnInit(): void {
    this.apostasService
      .getApostasByUser(1)
      .subscribe((apostas: Aposta[]) =>
        apostas.forEach((a) => this.apostas.push(a))
      );
  }
}
