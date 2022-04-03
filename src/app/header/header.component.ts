import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../dataService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isLoginIn: any;
  public subscription: Subscription;

  constructor(private ds: DataService) {
    // subscribe to home component messages
    this.subscription = this.ds.getData().subscribe((x) => {
      this.isLoginIn = x;
    });
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
    // unsubscribe to ensure no memory leaks
  }
}
