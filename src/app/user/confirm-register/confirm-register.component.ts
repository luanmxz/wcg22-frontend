import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-register',
  templateUrl: './confirm-register.component.html',
  styleUrls: ['./confirm-register.component.css'],
})
export class ConfirmRegisterComponent implements OnInit {
  confirmCode = new FormControl('', [Validators.required]);

  constructor() {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.confirmCode.hasError('required')) {
      return 'Esse campo é obrigatório';
    }

    return this.confirmCode.hasError('email') ? 'Not a valid email' : '';
  }
}
