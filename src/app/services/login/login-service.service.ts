import { Injectable } from '@angular/core';
import { ApiService } from '../api/api-service.service';
import { lastValueFrom, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/entities/authentication/login';
import { User } from 'src/app/entities/user/user';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private authService: AuthService
  ) { }


  public async loginAsync(login: Login): Promise<User> {
    return lastValueFrom(this.http.post<User>(this.apiService.getEndpoint("v1/auth/login"), login)
      .pipe(
        map((response: User) => {
          this.authService.setUserAuthenticated(response);
          return response;
        }),
      ),
    );
  }
}
