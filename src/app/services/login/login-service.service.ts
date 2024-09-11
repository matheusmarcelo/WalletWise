import { Injectable } from '@angular/core';
import { ApiService } from '../api/api-service.service';
import { lastValueFrom, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/entities/authentication/login';
import { User } from 'src/app/entities/user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { }


  public async login(login: Login): Promise<User> {
    return lastValueFrom(this.http.post<User>(this.apiService.getEndpoint("v1/auth/login"), login)
      .pipe(
        map((response: User) => {
          console.log("res", response)
          return response;
        }),
      ),
    );
  }
}
