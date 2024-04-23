// import { CanActivateFn } from '@angular/router';

// export const sessionGuard: CanActivateFn = (route, state) => {
  
//   return true;
// };


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard  {

  constructor(
    private cookieService: CookieService,
    private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCokieSession()
  }

  checkCokieSession(): boolean{
    console.log('1234')

    try {
      const token =  this.cookieService.check('token_service')
      if(!token){
        this.router.navigate(['/', 'auth'])
      }
      // console.log(token)
      return token
    } catch (error) {
      console.log('error')
      return false
    }
  }

  

}