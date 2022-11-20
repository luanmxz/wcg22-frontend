import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'https://app-wcg22.herokuapp.com/api/jogos/';

@Injectable({
  providedIn: 'root',
})
export class JogosAdminService {
  constructor(private http: HttpClient) {}
}
