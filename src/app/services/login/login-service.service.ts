import { Injectable } from '@angular/core';
import { ApiService } from '../api/api-service.service';
import { lastValueFrom, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { }


  public async login(): Promise<any> {
    return lastValueFrom(this.http.get(this.apiService.getEndpoint("login"))
      .pipe(
        map((response: any) => {
          try {
            return response;
          } catch (error) {
            
          }
        }),
      ),
    );
  }
}
