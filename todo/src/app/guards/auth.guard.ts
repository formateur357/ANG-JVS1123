import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let isAuth = inject(AuthService).isAuth;
  if (!isAuth) {
    return inject(Router).navigate(['/login']);
  }
  return isAuth;
};
