import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { UserRanking } from './UserRanking';

const API = 'https://app-wcg22.herokuapp.com/api/usuarios';

@Injectable({
  providedIn: 'root',
})
export class UserUtilsService {
  constructor(private http: HttpClient) {}

  findAllUsersForRanking(): Observable<UserRanking[]> {
    return this.http.get<UserRanking[]>(API + '/ranking');
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(API + `/find/${email}`);
  }

  findAllUsers(token: string): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.http.get<User[]>(API, httpOptions);
  }

  setNewRole(userId: number, token: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.http.put<User>(
      API + `/${userId}/set-new-role`,
      {
        id: 2,
        authority: 'ROLE_ADMIN',
      },
      httpOptions
    );
  }

  removeRole(userId: number, token: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.http.put<User>(
      API + `/${userId}/remove-role`,
      {
        id: 2,
        authority: 'ROLE_ADMIN',
      },
      httpOptions
    );
  }

  changePassword(novaSenha: string, token: string): Observable<User> {
    return this.http.put<User>(API + '/new-password', {
      novaSenha,
      token,
    });
  }
}
