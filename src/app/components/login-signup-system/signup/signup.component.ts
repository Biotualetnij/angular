import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/dataService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public user$: {
    userArr: {
      name: string;
      password: string;
      username: string;
      email: string;
    }[];
  } = {
    userArr: [{ name: '', password: '', username: '', email: '' }],
  };
  constructor(
    private http: HttpClient,
    private ds: DataService,
    private router: Router
  ) {}

  signUp = (
    username: string,
    password: string,
    email: string,
    name: string
  ) => {};
  ngOnInit(): void {
    this.signUp = (
      username: string,
      password: string,
      email: string,
      name: string
    ) => {
      if (!this.checkEmail(email)) return false;
      console.log('email is correct');
      if (!this.checkPassword(password)) return false;
      console.log('password is correct');
      if (!this.checkName(name)) return false;
      console.log('name is correct');
      if (!this.checkuserName(username)) return false;
      console.log('username is correct');
      return this.http

        .post<any>('http://localhost:3000/sign-up/registerUser', {
          login: username,
          password: password,
          email: email,
          name: name,
        })
        .subscribe(
          (response) => {
            if (response) {
              console.log('you are registered');
              this.ds.sendData(true);
              this.router.navigate(['']);
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
  checkEmail(email: string) {
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
  }

  checkPassword(password: string) {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  }
  checkName(name: string) {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(name);
  }
  checkuserName(username: string) {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(username);
  }
}

// {
//   "userArr": [
//     { "name": "user", "password": "userCool" },
//     { "name": "admin", "password": "admin" }
//   ]
// }
