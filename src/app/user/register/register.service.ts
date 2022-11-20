import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'https://app-wcg22.herokuapp.com/api/usuarios';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  checkUserNameTaken(userName: string) {
    return this.http.get(API + '/user/exists/' + userName);
  }

  createUser(nome: string, senha: string, email: string): Observable<any> {
    return this.http.post(API, { nome, senha, email });
  }
}
