import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
