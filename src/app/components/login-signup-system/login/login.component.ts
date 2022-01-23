import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user$: any;
  public userArr = [
    { name: 'user', password: 'userCool' },
    { name: 'admin', password: 'admin' },
  ];
  public user: any;
  constructor(private http: HttpClient) {
    this.user$ = [{ name: '', password: '' }];
  }
  logIn = function (username: string, password: string) {};

  ngOnInit(): void {
    this.logIn = function (username: string, password: string) {
      this.http.get<any>('assets/users.json').subscribe(
        (response) => {
          console.log(response);
          this.user$ = response;
        },
        (error) => {
          console.log(error);
        }
      );
      // this.user = this.userArr.find((element) => {
      //   if (element.name == username && element.password == password) {
      //     return true;
      //   }
      //   return false;
      // });

      // if (this.user) {
      //   console.log('you are logged in');
      // } else {
      //   console.log('you are not logged in');
      // }
    };
  }
}
