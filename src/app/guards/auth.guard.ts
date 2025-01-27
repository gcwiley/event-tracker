import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const AuthGuard: CanActivateFn = (
   route: ActivatedRouteSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  // obtains an instance of the Router service, which is used for navigation within the application
   const router: Router = inject(Router);
   const isUserLogged = sessionStorage.getItem('isUserLogged');
   // if the user tries to access the '/welcome' route AND 'isUserLogged' is true (meaning they are logged in), the guard redirects them to the '/home' route. this prevents logged-in users from accessing the welcome page
   if (route.url.toString() === 'welcome') {
      // logged-in users are redirected from the welcome page to the home page
      if (isUserLogged?.toString() === 'true') {
         return router.parseUrl('/home');
      }
      // non-logged-in users are redirected to the welcome page from any other protected route.
   } else {
      if (isUserLogged?.toString() !== 'true') {
         return router.parseUrl('/welcome');
      }
   }

   return true;
};
