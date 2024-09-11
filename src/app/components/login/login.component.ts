import { Component, inject } from '@angular/core';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { DividerComponent } from '../../shared/components/divider/divider.component';
import { LinkComponent } from '../../shared/components/link/link.component';
import { FormGroup, Validators } from '@angular/forms';
import { DynamicFormComponent } from '../../shared/components/dynamic-form/dynamic-form.component';
import { LoginService } from 'src/app/services/login/login-service.service';
import { FormField } from 'src/app/entities/formField/formField.interface';
import { Login } from 'src/app/entities/authentication/login';

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
      name: 'password', 
      type: 'password', 
      placeholder: 'Senha', 
      width: 'w-full', 
      validators: [Validators.required] 
    },
  ];

  private userLogin: Login = new Login();
  private fb: FormGroup = new FormGroup({});

  private loginService: LoginService = inject(LoginService);

  protected async login() {
    if(this.fb && this.fb.valid) {
      await this.loginService.login(this.userLogin);
    } else {
      console.log(this.fb)
      // Object.values(userLogin.fb.controls).forEach((control) => {
      //   control.markAsTouched();
      // });
      alert("Preencha todos os campos!");
    }
  }

  protected setUserlogin(event?: FormGroup): void {
    if(event) {
      this.fb = event;
      this.userLogin = {
        email: event.value.email,
        password: event.value.password,
      }
    }
  }
}
