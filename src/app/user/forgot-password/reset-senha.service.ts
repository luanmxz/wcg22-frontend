import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:8091/recovery-password';

@Injectable({
  providedIn: 'root',
})
export class emailService {
  constructor(private http: HttpClient) {}

  sendToken(email: string | null) {
    return this.http.post(API, { email });
  }
}
