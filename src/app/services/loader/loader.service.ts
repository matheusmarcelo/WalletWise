import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoading.asObservable();
  
  constructor() { }

  public show() {
    this.isLoading.next(true);
  }

  public hide() {
    this.isLoading.next(false);
  }
}
