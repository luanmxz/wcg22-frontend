import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo } from './Jogo';

const API = 'http://localhost:8091/api/jogos';

@Injectable({
  providedIn: 'root',
})
export class JogosService {
  constructor(private http: HttpClient) {}

  findAllJogos(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(API);
  }

  findAllJogosByGroupID(groupId: number): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(API + `/group/${groupId}`);
  }

  updateJogoByID(dados: any): Observable<any> {
    return this.http.put<any>(API + `${dados}`, dados);
  }
}
