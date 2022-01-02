import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  usernames: any;

  clickme = function (username: string) {};
  ngOnInit(): void {
    this.clickme = function (username: string) {
      this.usernames = username;
      console.log('it does nothing', username);
    };
  }
}
