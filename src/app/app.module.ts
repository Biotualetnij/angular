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
import { DataService } from './dataService';
import { AuthGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

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
  ],
  imports: [
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
