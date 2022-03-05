import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-dami',
  templateUrl: './sign-up-dami.component.html',
  styleUrls: ['./sign-up-dami.component.css'],
})
export class SignUpDamiComponent implements OnInit {
  public user$: { userArr: { name: string; password: string }[] } = {
    userArr: [{ name: '', password: '' }],
  };

  constructor(private http: HttpClient) {}

  signUpdami = (username: string, password: string) => {};
  ngOnInit(): void {
    this.signUpdami = (username: string, password: string) => {};
  }
}
