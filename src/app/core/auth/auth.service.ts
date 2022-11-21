import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthToken } from 'src/app/core/auth/authToken';
import { UserService } from 'src/app/user/user-service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  //realizar a requisição
  userAuthenticate(userName: string, password: string) {
    let oauth2_token_endpoint = 'https://app-wcg22.herokuapp.com/oauth/token';
    let oauth2_client_id = 'wcg22';
    let oauth2_client_secret = 'wcg22secret';

    const httpOtions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/x-www-form-urlencoded',
        Origin: 'https://https://wcg22.netlify.app/',
        Authorization:
          'Basic ' + btoa(oauth2_client_id + ':' + oauth2_client_secret),
      }),
    };

    const body =
      'client_id={0}&client_secret={1}&grant_type=password&username={2}&password={3}'
        .replace('{0}', oauth2_client_id)
        .replace('{1}', oauth2_client_secret)
        .replace('{2}', userName)
        .replace('{3}', password);

    return this.http
      .post<AuthToken>(oauth2_token_endpoint, body, httpOtions)
      .pipe(
        tap((response) => {
          const acess_token = response.access_token;
          this.userService.setToken(acess_token);
        })
      );
  }
}
