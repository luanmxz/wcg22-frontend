import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Selecao } from '../interfaces/Selecao';

const API = 'https://app-wcg22.herokuapp.com/api/selecoes/';

@Injectable({
  providedIn: 'root',
})
export class SelecaoService {
  constructor(private http: HttpClient) {}

  findAllSelecoes(): Observable<Selecao[]> {
    return this.http.get<Selecao[]>(API);
  }
}
