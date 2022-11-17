import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/user/user-service/user.service';
import { Aposta } from '../interfaces/Aposta';
import { ApostaService } from '../services/apostas.service';

@Component({
  selector: 'app-apostas',
  templateUrl: './apostas.component.html',
  styleUrls: ['./apostas.component.css'],
})
export class ApostasComponent implements OnInit {
  currentUser!: User;
  apostas: Aposta[] = [];

  constructor(
    private apostasService: ApostaService,
    private userService: UserService
  ) {
    this.userService.getUser().subscribe((user) => {
      this.populaApostas(user.id);
      this.currentUser = user;
    });
  }

  ngOnInit(): void {}

  populaApostas(idUser: number) {
    this.apostasService
      .getApostasByUser(idUser)
      .subscribe((apostas: Aposta[]) => (this.apostas = apostas));
  }
}
