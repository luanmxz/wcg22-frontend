import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { TokenService } from '../token/token.service';

const API = 'http://localhost:3000/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  authenticate(userName: string, password: string) {
    return this.httpClient
      .post(API, { userName, password }, { observe: 'response' })
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-acess-token');
          this.tokenService.setToken(authToken);
        })
      );
  }
}
