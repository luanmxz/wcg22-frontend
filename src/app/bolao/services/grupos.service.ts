import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../interfaces/Grupo';

const API = 'http://localhost:8091/api/grupos/';

@Injectable({
  providedIn: 'root',
})
export class GrupoService {
  constructor(private http: HttpClient) {}

  findAllGrupos(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(API);
  }
}
