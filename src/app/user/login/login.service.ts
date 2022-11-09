import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthToken } from 'src/app/core/auth/authToken';

@Injectable({ providedIn: 'root' })
export class LoginService {
  isLoggedIn!: boolean;

  constructor(private http: HttpClient) {}

  getAccessToken(username: string, password: string): Observable<AuthToken> {
    let oauth2_token_endpoint = 'https://app-wcg22.herokuapp.com/oauth/token';
    let oauth2_client_id = 'wcg22';
    let oauth2_client_secret = 'wcg22secret';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' + btoa(oauth2_client_id + ':' + oauth2_client_secret),
      }),
    };

    const body =
      'client_id={0}&client_secret={1}&grant_type=password&username={2}&password={3}'
        .replace('{0}', oauth2_client_id)
        .replace('{1}', oauth2_client_secret)
        .replace('{2}', username)
        .replace('{3}', password);

    console.log(body);

    return this.http.post<AuthToken>(oauth2_token_endpoint, body, httpOptions);
  }
}
