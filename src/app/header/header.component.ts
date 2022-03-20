import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isLoginIn = false;
  constructor(private cookieService: CookieService) {}
  getCookie() {
    let auth = this.cookieService.get('login');
    if (auth === 'true') {
      this.isLoginIn = true;
    } else {
      this.isLoginIn = false;
    }
    setTimeout(() => {
      this.getCookie();
    }, 5000);
  }

  ngOnInit(): void {
    this.getCookie();
  }
}
