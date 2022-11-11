import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

const KEY = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  hasToken() {
    return !!this.getToken();
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY) as string;
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }

  hasExpired() {
    if (this.hasToken()) {
      const token: any = jwtDecode(this.getToken());
      const currentTime = Date.now() / 1000;
      return token.expires_in < currentTime;
    }
    return false;
  }
}
