import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api-service.service';
import { Register } from 'src/app/entities/authentication/register';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  public async registerUserAsync(user: Register): Promise<void | any> {
    return lastValueFrom(this.http.post<Register>(this.apiService.getEndpoint("v1/users/create-user"), user)
      .pipe(
        map((response: any) => {
          alert(response);
        }), 
      )
    );
  }
}
