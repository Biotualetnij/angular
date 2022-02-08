import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user$: { userArr: { name: string; password: string }[] } = {
    userArr: [{ name: '', password: '' }],
  };
  public user: any;
  constructor(private http: HttpClient) {}

  logIn = function (username: string, password: string) {};

  ngOnInit(): void {
    this.logIn = function (username: string, password: string) {
      this.http
        .post<any>('http://localhost:3000/log-in/checkUser', {
          login: username,
          password: password,
        })
        .subscribe(
          (response) => {
            if (response) {
              console.log('you are logged in');
            } else {
              console.log('you are not logged in');
            }
          },
          (error) => {
            console.log(error);
          }
        );
    };
  }
}
