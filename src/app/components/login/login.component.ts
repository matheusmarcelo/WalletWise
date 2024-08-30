import { Component, inject } from '@angular/core';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { DividerComponent } from '../../shared/components/divider/divider.component';
import { LinkComponent } from '../../shared/components/link/link.component';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from '../../shared/components/dynamic-form/dynamic-form.component';
import { LoginService } from 'src/app/services/login/login-service.service';
import { FormField } from 'src/app/entities/formField/formField.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent, ButtonComponent, DividerComponent, LinkComponent, DynamicFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  protected formFields: FormField[] = [
    { 
      name: 'email', 
      type: 'email', 
      placeholder: 'Email', 
      width: 'w-full', 
      validators: [Validators.required, Validators.email] 
    },
    { 
      name: 'senha', 
      type: 'password', 
      placeholder: 'Senha', 
      width: 'w-full', 
      validators: [Validators.required] 
    },
  ];

  private loginService: LoginService = inject(LoginService);
  constructor() {}

  protected async login() {
    await this.loginService.login();
  }
}
