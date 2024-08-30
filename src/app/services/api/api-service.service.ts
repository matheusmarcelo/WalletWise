import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl: string = environments.apiUrl;

  constructor() { }

  public getEndpoint(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`;
  }
}
