import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  self = this;
  inputValue: any;
  usernames: any;
  toDoListArray: any;

  constructor() {
    this.usernames = 's';
    this.toDoListArray = ['hello', 'goodbye'];
  }

  clickme = function (username: string) {};
  getArrayFromLocalStorage = function () {};

  ngOnInit(): void {
    this.inputValue = 'hello friend';

    this.getArrayFromLocalStorage = function () {
      this.usernames = localStorage.getItem('taskArray');
      this.toDoListArray = JSON.parse(this.usernames);
    };
    this.getArrayFromLocalStorage();
    this.clickme = function (username: string) {
      this.usernames = username;
      console.log('it does nothing', username);
    };
  }
}
