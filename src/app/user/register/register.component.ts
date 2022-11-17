import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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
          this.router.navigateByUrl('login'); //.then(() => window.location.reload());
        }),
        (err: Error) => console.log(`Erro ao realizar o login -> ${err}`);
    }
  }

  /*register() {
    const formData = this.registerForm.getRawValue();
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    console.log(
      `Dados a serem registrados: ${user.name}, ${user.email}, ${user.password}`
    );
    this.userService
      .register(user.name, user.email, user.password)
      .subscribe(() => {
        console.log(`Usuário ${user} cadastrado com sucesso`);
        this.router.navigateByUrl('login');
      }),
      (err: Error) => console.log(`Erro ao cadastrar o usuário ${err}`);
  }*/

  /*updateUserById() {
    const formData = this.registerForm.getRawValue();
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      lastUpdate: new Date(),
      admin: false,
    };
    this.userService.updateUserById(user, 2).subscribe(() => {
      console.log(`Usuário ${user.name} alterado com sucesso`);
    }),
      (err: Error) => console.log(`Erro ao alterar o usuário -> ${err}`);
  } */
}
