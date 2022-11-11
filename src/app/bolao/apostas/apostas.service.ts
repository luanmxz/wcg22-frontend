import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aposta } from './Aposta';

@Injectable({
  providedIn: 'root',
})
export class ApostaService {
  private url: string = 'http://localhost:8091/api/apostas';

  constructor(private http: HttpClient) {}

  createAposta(
    apostouEm: String,
    idUser: number,
    idJogo: number
  ): Observable<Aposta> {
    console.log(apostouEm);
    return this.http.post<Aposta>(this.url, { apostouEm, idUser, idJogo });
  }

  getApostasByUser(userId: number): Observable<Aposta[]> {
    return this.http.get<Aposta[]>(this.url + '/users/' + userId);
  }
}
