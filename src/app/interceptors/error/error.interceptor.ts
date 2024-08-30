import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorMessageService } from 'src/app/services/errorMessage/error-message.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorMessageService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage: string = "Ocorreu um erro desconhecido!";
      let consoleErrorMessage: string = "";

      if(error.error instanceof ErrorEvent) {
        errorMessage = `${error.message}`;
      } else {
        consoleErrorMessage = `\nCódigo do erro: ${error.status}\nMensagem: ${error.message}`;
      }

      errorService.setErrorMessage(errorMessage);

      return throwError(() => new Error(consoleErrorMessage));
    })
  );
};
