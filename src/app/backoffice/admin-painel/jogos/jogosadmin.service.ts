import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:8091/api/jogos/';

@Injectable({
  providedIn: 'root',
})
export class JogosAdminService {
  constructor(private http: HttpClient) {}
}
