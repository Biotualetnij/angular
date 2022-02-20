import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public user$: { userArr: { name: string; password: string }[] } = {
    userArr: [{ name: '', password: '' }],
  };
  constructor(private http: HttpClient) {}

  signUp = (username: string, password: string) => {};
  ngOnInit(): void {
    this.signUp = (username: string, password: string) => {
      this.http
        .post<any>('http://localhost:3000/sign-up/registerUser', {
          login: username,
          password: password,
        })
        .subscribe(
          (response) => {
            if (response) {
              console.log('you are registered');
            } else {
              console.log('you cannot be registered ');
            }
          },
          (error) => {
            console.log(error);
          }
        );
    };
  }
}
// {
//   "userArr": [
//     { "name": "user", "password": "userCool" },
//     { "name": "admin", "password": "admin" }
//   ]
// }
