import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { UserRanking } from './UserRanking';

const API = 'http://localhost:8091/api/usuarios';

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
}
