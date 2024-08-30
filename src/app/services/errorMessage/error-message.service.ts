import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  private errorMessage: Subject<string> = new Subject<string>();

  public error$ = this.errorMessage.asObservable();

  constructor() { }

  public setErrorMessage(message: string) {
    this.errorMessage.next(message);
  }
}
