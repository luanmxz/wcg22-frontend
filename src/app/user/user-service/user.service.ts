import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { TokenService } from 'src/app/core/token/token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({
    id: 0,
    username: '',
    email: '',
  });
  private userName!: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  getUserName() {
    return this.userName;
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next({ id: 0, username: '', email: '' }); // -> no alurapic esta next(null)
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const payloadUser = jwt_decode(token!) as User;
    this.userName = payloadUser.username;
    this.userSubject.next(payloadUser);
  }
}
