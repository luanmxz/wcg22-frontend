import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { emailService } from './reset-senha.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private emailService: emailService) {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Esse campo é obrigatório';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  resetSenha() {
    this.emailService
      .sendToken(this.email.value)
      .subscribe(() =>
        alert('Token para redefinição de senha enviado ao seu email!')
      );
  }
}
