import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api
  constructor(private _httpClient: HttpClient, private _cookieService: CookieService) { }

  public sendCredentials(email: string, password: string): Observable<any> {
    return this._httpClient.post(this.URL + '/auth/login', {email, password})
    .pipe(
      tap( (response:any) =>{
        const {tokenSession} = response
        this._cookieService.set('token_service', tokenSession, 4, '/')
      })
    )
  }
}
