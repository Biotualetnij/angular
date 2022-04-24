import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  isLoggedIn() {
    let islogin = this.cookieService.get('login');

    if (islogin == 'true') {
      return true;
    } else return false;
  }
}
