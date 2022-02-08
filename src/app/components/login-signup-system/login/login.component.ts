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
      this.http.get<any>('http://localhost:3000/log-in/users').subscribe(
        (response) => {
          this.user$ = response;

          this.user = this.user$.userArr.find(
            (element: { name: string; password: string }) => {
              if (element.name == username && element.password == password) {
                return true;
              }
              return false;
            }
          );
          if (this.user) {
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
