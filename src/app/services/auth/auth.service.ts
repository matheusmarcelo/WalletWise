import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  public setUserAuthenticated(user: User): void {
    if(user) {
      localStorage.setItem("userAuthenticated", JSON.stringify(user));
    }
  }

  public getUserAuthenticated(): User | undefined {
    const user = localStorage.getItem("userAuthenticated");

    if(user) { 
      return JSON.parse(user) as User;
    }

    return undefined;
  }
}
