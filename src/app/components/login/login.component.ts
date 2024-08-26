import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { DividerComponent } from '../../shared/components/divider/divider.component';
import { LinkComponent } from '../../shared/components/link/link.component';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from '../../shared/components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent, ButtonComponent, DividerComponent, LinkComponent, DynamicFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formFields = [
    { name: 'username', type: 'email', placeholder: 'Email', width: 'w-full', validators: [Validators.required, Validators.email] },
    { name: 'email', type: 'password', placeholder: 'Senha', width: 'w-full', validators: [Validators.required] },
  ];

  constructor() {
    this.showErrorMsg("testesteste")
  }

  showError: boolean = false;
  errorMessage: string = '';

  showErrorMsg(message: string) {
    this.errorMessage = message;
    this.showError = true;

    // Oculta a mensagem após 3 segundos
    setTimeout(() => {
      this.showError = false;
    }, 5000);
  }
}
