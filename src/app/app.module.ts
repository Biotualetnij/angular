import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { LoginComponent } from './components/login-signup-system/login/login.component';
import { SignupComponent } from './components/login-signup-system/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginArgComponent } from './login-arg/login-arg.component';
import { SignupArgComponent } from './signup-arg/signup-arg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ErrorPageComponent,
    ToDoListComponent,
    LoginComponent,
    SignupComponent,
    LoginArgComponent,
    SignupArgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
