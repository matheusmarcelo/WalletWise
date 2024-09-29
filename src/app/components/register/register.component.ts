import { Component, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/entities/authentication/register';
import { FormField } from 'src/app/entities/formField/formField.interface';
import { RegisterService } from 'src/app/services/register/register.service';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { LinkComponent } from 'src/app/shared/components/link/link.component';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LogoComponent, DynamicFormComponent, ButtonComponent, LinkComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  protected formFields: FormField[] = [
    { 
      name: 'name',
      label: '* Nome completo',
      type: 'text', 
      textColor: 'text-white',
      placeholder: '', 
      width: 'w-full', 
      validators: [Validators.required] 
    },
    { 
      name: 'documentNumber',
      label: '* CPF', 
      type: 'text',
      textColor: 'text-white', 
      placeholder: '', 
      width: 'w-full', 
      validators: [Validators.required] 
    },
    { 
      name: 'birthDate',
      label: '* Data de Nascimento', 
      type: 'date',
      textColor: 'text-white', 
      placeholder: '', 
      width: 'w-full', 
      validators: [Validators.required] 
    },
    {
      name: 'email',
      label: '* Email', 
      type: 'email',
      textColor: 'text-white', 
      placeholder: '', 
      width: 'w-full', 
      validators: [Validators.required, Validators.email] 
    },  
    {
      name: 'password',
      label: '* Senha', 
      type: 'password',
      textColor: 'text-white', 
      placeholder: '', 
      width: 'w-full', 
      validators: [Validators.required] 
    },    
  ];

  private registerService: RegisterService = inject(RegisterService);
  private register: Register = new Register();
  private fb: FormGroup = new FormGroup({}); 

  protected async registerUser() {
    if (this.fb && Object.keys(this.fb.controls).length > 0) {
  
      this.fb.markAllAsTouched();
  
      if (this.fb.valid) {
        await this.registerService.registerUserAsync(this.register);
      } else {
        alert("Preecha todos os campos obrigatórios!");
      }
  
    } else {
      alert("Preencha todos os campos!");
    }
  }

  protected setRegisterUser(event: FormGroup) {
    if(event) {
      this.fb = event;
      this.register = {
        name: event.value.name,
        email: event.value.email,
        password: event.value.password,
        documentNumber: event.value.documentNumber,
        birthDate: event.value.birthDate
      }
    }
  }
}
