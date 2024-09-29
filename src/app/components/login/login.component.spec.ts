import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/app/services/login/login-service.service';
import { User } from 'src/app/entities/user/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LoginService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service login', async () => {
    const user = new User();
    const spyService = spyOn(service, "loginAsync").and.returnValue(Promise.resolve(user));

    component["setUserlogin"](new FormGroup({
      email: new FormControl("teste@teste.com", [Validators.required, Validators.email]),
      password: new FormControl("123456", Validators.required),
    }))

    expect(component["fb"].valid).toBeTrue();

    await component["login"]();

    expect(spyService).toHaveBeenCalled();
  });

  it('should not call service login', async () => {
    const user = new User();
    const spyService = spyOn(service, "loginAsync").and.returnValue(Promise.resolve(user));

    component["setUserlogin"](new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("123456", Validators.required),
    }))

    expect(component["fb"].valid).toBeFalse();

    await component["login"]();

    expect(spyService).not.toHaveBeenCalled();
  });
});
