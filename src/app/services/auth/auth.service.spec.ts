import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { User } from 'src/app/entities/user/user';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a user athenticated', () => {
    const user: User = {
      id: 1,
      name: 'Matheus teste',
      email: "matheus@teste.com",
      code: '0123456789',
      access_token: "123456789"
    }

    service.setUserAuthenticated(user);
    expect(service.getUserAuthenticated()).toEqual(user);
  });

  it('should return undefined when user is not authenticate', () => {
    localStorage.removeItem("userAuthenticated");
    expect(service.getUserAuthenticated()).toBeUndefined();
  });
});
