import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;

  fromUrl!: string;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.fromUrl = params['fromUrl'];
    });
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  login() {
    this.authService
      .userAuthenticate(
        this.loginForm.controls['email'].value,
        this.loginForm.controls['password'].value
      )
      .subscribe(() => {
        this.router.navigateByUrl('/bolao/jogos');
        //console.log('Resposta do back-end: ');
      }),
      (err: Error) => {
        console.log(err);
        this.loginForm.reset();
        alert('invalid user name or password');
      };
  }
}
