import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user-service/user.service';
import { Log } from './Log';

const API = 'http://localhost:8091/api/logs';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(private http: HttpClient, private userService: UserService) {}

  getAllLogs(): Observable<Log[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.userService.getToken(),
      }),
    };

    return this.http.get<Log[]>(API, httpOptions);
  }

  getLogsByUserId(userId: number): Observable<Log[]> {
    return this.http.get<Log[]>(API + `/${userId}`);
  }
}
