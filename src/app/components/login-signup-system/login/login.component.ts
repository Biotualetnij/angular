import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userArr = [
    { name: 'user', password: 'userCool' },
    { name: 'admin', password: 'admin' },
  ];
  public user: any;
  constructor() {}
  logIn = function (username: string, password: string) {};

  ngOnInit(): void {
    this.logIn = function (username: string, password: string) {
      this.user = this.userArr.find((element) => {
        if (element.name == username && element.password == password) {
          return true;
        }
        return false;
      });

      if (this.user) {
        console.log('you are logged in');
      } else {
        console.log('you are not logged in');
      }
    };
  }
}
