import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenSessionInterceptor implements HttpInterceptor {

  constructor(private _cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      let newReq = request
      newReq = request.clone({
        setHeaders:{
          authorization: 'Bearer '+ this._cookieService.get('token_service')
        }
      })
      return next.handle(newReq)
    } catch (error) {
      console.log('error en el interceptor')
      return next.handle(request)
    }
  }
}
