import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})
  errorSession:boolean = false
  constructor(private _authService: AuthService, private _cookieServie: CookieService, private _router: Router){

  }

  ngOnInit(): void {
      this.loginForm = new  FormGroup(
        {
          email: new FormControl('', [
            Validators.required, 
            Validators.email
          ]),
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
        }
      )
  }

  login(){
    const {email, password} = this.loginForm.value
     this._authService.sendCredentials(email, password).subscribe( ({data, tokenSession}) =>{
      console.log(tokenSession)
      // this._cookieServie.set('token', tokenSession, 4, '/')
      this._router.navigate(['/', 'tracks'])
     }, 
     err=> this.errorSession = true)
  }
}
