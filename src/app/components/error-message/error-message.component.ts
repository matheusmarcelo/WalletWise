import { Component, inject, OnInit } from '@angular/core';
import { ErrorMessageService } from 'src/app/services/errorMessage/error-message.service';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent implements OnInit {
  protected showError: boolean = false;
  protected errorMessage: string = "";

  private errorService = inject(ErrorMessageService);

  ngOnInit(): void {
    this.errorService.error$.subscribe((message: string) => {
      this.showErrorMsg(message);
    });
  }

  showErrorMsg(message: string) {
    this.errorMessage = message;
    this.showError = true;

    setTimeout(() => {
      this.showError = false;
    }, 5000);
  }
}
