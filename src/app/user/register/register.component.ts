import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification/notification.service';
import { ConfirmedValidator } from '../password-validator';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  hide = true;
  hide2 = true;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(15),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(18),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: ConfirmedValidator('password', 'confirmPassword'),
      } as AbstractControlOptions
    );
  }

  register() {
    if (this.registerForm.valid && !this.registerForm.pending) {
      this.registerService
        .createUser(
          this.registerForm.controls['name'].value,
          this.registerForm.controls['password'].value,
          this.registerForm.controls['email'].value
        )
        .subscribe(() => {
          this.notificationService.success(
            'SUCESSO',
            'Conta criada com sucesso!'
          );
          this.router.navigateByUrl('login');
        }),
        (err: Error) => console.log(err);
      this.notificationService.error(
        'ERRO',
        'Não foi possível criar a conta, tente novamente!'
      );
      this.registerForm.reset();
    }
  }
}
