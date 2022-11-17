import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/interfaces/user';
import { UserService } from '../user/user-service/user.service';

@Component({
  selector: 'app-bolao',
  templateUrl: './bolao.component.html',
  styleUrls: ['./bolao.component.css'],
})
export class BolaoComponent implements OnInit {
  currentUser$!: Observable<User>;
  currentUser!: User;
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

  constructor(private userService: UserService) {
    this.currentUser$ = this.userService.getUser();
    this.currentUser$.subscribe((user) => (this.currentUser = user));
  }

  ngOnInit(): void {}

  logout() {
    this.userService.logout();
  }
}
