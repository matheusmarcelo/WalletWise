import { TestBed } from '@angular/core/testing';

import { LoginService } from './login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { environments } from 'src/environments/environments';

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

  it('shold make an HTTP GET request', async () => {
    const mockResponse = 
    {  
      id: 1,
      code: "0123456789",
      name: "matheus",
      email: "matheus@teste.com",
      access_token: "456789"
    };

    service.login().then(response => {
      // Verifica a resposta da requisição
      expect(response).toEqual(mockResponse);
    });

    // Captura a requisição HTTP feita pela função login
    const req = httpTestingControler.expectOne(`${environments.apiUrl}login`);

    expect(req.request.method).toEqual("GET");

    req.flush(mockResponse);
  });
});
