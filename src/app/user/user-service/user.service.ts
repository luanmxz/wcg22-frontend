import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';

const API = 'http://localhost:3000/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  users: User[] = [];

  constructor(private httpClient: HttpClient) {}

  get user() {
    return;
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(API);
  }

  getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${API}/${userId}`);
  }

  deleteUserById(userId: number) {
    return this.httpClient.delete(`${API}/${userId}`);
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(API, user);
  }

  updateUserById(user: User, userId: number): Observable<User> {
    return this.httpClient.patch<User>(`${API}/${userId}`, user);
  }
}
