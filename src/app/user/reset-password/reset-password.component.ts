import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification/notification.service';
import { UserService } from '../user-service/user.service';
import { UserUtilsService } from '../user-service/userUtils.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  hide!: boolean;
  resetSenha!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userUtilsService: UserUtilsService,
    private userService: UserService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.resetSenha = this.formBuilder.group({
      novaSenha: ['', [Validators.required]],
      tokenSenha: ['', [Validators.required]],
    });
  }

  getErrorMessage() {
    if (this.resetSenha.controls['novaSenha'].value.hasError('required')) {
      return 'Esse campo é obrigatório';
    }
    if (this.resetSenha.controls['tokenSenha'].value.hasError('required')) {
      return 'Esse campo é obrigatório';
    }
    return '';
  }

  mudarSenha(newSenha: string, token: string) {
    this.userUtilsService.changePassword(newSenha, token).subscribe({
      next: () => {
        this.notificationService.success(
          'SUCESSO!',
          'Senha alterada com sucesso!'
        ),
          this.router.navigateByUrl('login');
      },
      error: (err: Error) => {
        this.notificationService.error(
          'ERRO!',
          'Token inválido! Tente novamente.'
        ),
          this.resetSenha.reset();
      },
    });
  }
}
