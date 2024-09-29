import { TestBed } from '@angular/core/testing';

import { LoginService } from './login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { environments } from 'src/environments/environments';
import { Login } from 'src/app/entities/authentication/login';
import { User } from 'src/app/entities/user/user';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingControler: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LoginService);
    httpTestingControler = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shold make an HTTP POST request', async () => {
    const mockResponse: User = 
    {  
      id: 1,
      code: "0123456789",
      name: "matheus",
      email: "matheus@teste.com",
      access_token: "456789"
    };

    const userLogin: Login = {
      email: "teste@gmail.com",
      password: "1234"
    }

    service.loginAsync(userLogin).then(response => {
      expect(response).toEqual(mockResponse);
    });
  });
});
