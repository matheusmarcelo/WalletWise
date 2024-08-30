import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderService } from 'src/app/services/loader/loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);

  loaderService.show();
  
  return next(req).pipe(
    finalize(() => setTimeout(() => {
      loaderService.hide();
    }, 5000)),
  );
};
