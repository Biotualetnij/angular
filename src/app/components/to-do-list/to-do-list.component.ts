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
  isInput: number;
  constructor() {
    this.isInput = -1;
    this.usernames = 's';
    this.toDoListArray = [{ name: '' }];
  }

  clickme = function (username: string) {};
  getArrayFromLocalStorage = function () {};
  addValueToToDoArray = function (item: string) {};
  showInput = function (index: number) {};
  deleteValueInTaskArray = function (index: number) {};
  ngOnInit(): void {
    this.inputValue = 'hello friend';

    this.getArrayFromLocalStorage = function () {
      this.usernames = localStorage.getItem('taskArray');
      if (this.usernames) {
        this.toDoListArray = JSON.parse(this.usernames);
      }
    };
    this.addValueToToDoArray = function (item) {
      this.toDoListArray.push({ name: item });
      localStorage.setItem('taskArray', JSON.stringify(this.toDoListArray));
    };
    this.showInput = function (index) {
      this.isInput = index;
    };
    this.deleteValueInTaskArray = function (index) {
      this.toDoListArray.splice(index, 1);
      localStorage.setItem('taskArray', JSON.stringify(this.toDoListArray));
    };
    this.clickme = function (username: string) {
      this.usernames = username;
      console.log('it does nothing', username);
    };
    this.getArrayFromLocalStorage();
  }
}
