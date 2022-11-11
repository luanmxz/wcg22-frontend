import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Selecao } from './Selecao';

const API = 'http://localhost:8091/api/selecoes/';

@Injectable({
  providedIn: 'root',
})
export class SelecaoService {
  constructor(private http: HttpClient) {}

  findAllSelecoes(): Observable<Selecao[]> {
    return this.http.get<Selecao[]>(API);
  }
}
