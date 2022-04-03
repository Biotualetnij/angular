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
import { LoginDamiComponent } from './login-dami/login-dami.component';
import { SignUpDamiComponent } from './sign-up-dami/sign-up-dami.component';
import { DataService } from './dataService';

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
    LoginDamiComponent,
    SignUpDamiComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
