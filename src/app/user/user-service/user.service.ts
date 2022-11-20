import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthToken } from 'src/app/core/auth/authToken';
import { User } from 'src/app/core/interfaces/user';
import { TokenService } from 'src/app/core/token/token.service';
import { UserUtilsService } from './userUtils.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({
    id: 0,
    nome: '',
    email: '',
    pontos: 0,
    admin: false,
  });

  constructor(
    private tokenService: TokenService,
    private userUtilsService: UserUtilsService,
    private router: Router
  ) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  getToken() {
    return this.tokenService.getToken();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  setUser(user: User) {
    this.userSubject.next(user);
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next({
      id: 0,
      nome: '',
      email: '',
      pontos: 0,
      admin: false,
    });
    this.router.navigateByUrl('home');
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const payloadUser = jwt_decode(token!) as AuthToken;
    this.userUtilsService
      .getUserByEmail(payloadUser.user_name)
      .subscribe((user) => {
        this.setUser({
          id: user.id,
          email: user.email,
          pontos: user.pontos,
          nome: user.nome,
          admin: user.admin,
        });
      });
  }
}
