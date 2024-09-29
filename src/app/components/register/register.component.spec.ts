import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RegisterService } from 'src/app/services/register/register.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: RegisterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(RegisterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service register', async () => {
    const spyService = spyOn(service, "registerUserAsync").and.returnValue(Promise.resolve());

    component["setRegisterUser"](new FormGroup({
      name: new FormControl("Matheus", Validators.required),
      email: new FormControl("teste@teste.com", [Validators.required, Validators.email]),
      password: new FormControl("123456", Validators.required),
      documentNumber: new FormControl("0123456789", Validators.required),
      birthDate: new FormControl(new Date(), Validators.required),
    }));

    expect(component["fb"].valid).toBeTrue();

    await component["registerUser"]();

    expect(spyService).toHaveBeenCalled();
    
  });

  it('should not call service register', async () => {
    const spyService = spyOn(service, "registerUserAsync").and.returnValue(Promise.resolve());

    component["setRegisterUser"](new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("teste@teste.com", [Validators.required, Validators.email]),
      password: new FormControl("123456", Validators.required),
      documentNumber: new FormControl("0123456789", Validators.required),
      birthDate: new FormControl(new Date(), Validators.required),
    }));

    expect(component["fb"].valid).toBeFalse();

    await component["registerUser"]();

    expect(spyService).not.toHaveBeenCalled();
    
  });
});
