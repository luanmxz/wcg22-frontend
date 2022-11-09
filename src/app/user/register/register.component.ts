import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../password-validator';
import { UserService } from '../user-service/user.service';

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
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.maxLength(15)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: ConfirmedValidator('password', 'confirmPassword'),
      } as AbstractControlOptions
    );
  }

  register() {
    const formData = this.registerForm.getRawValue();
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      createdAt: new Date(),
      lastUpdate: new Date(),
      admin: false,
    };
    this.userService.register(user).subscribe(() => {
      console.log(`Usuário ${user} cadastrado com sucesso`);
      this.router.navigateByUrl('login');
    }),
      (err: Error) => console.log(`Erro ao cadastrar o usuário ${err}`);
  }

  updateUserById() {
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
  }
}
