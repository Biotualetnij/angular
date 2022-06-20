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
import { MultyItemCaruselComponent } from './shared/multy-item-carusel/multy-item-carusel.component';
import { NavbarBtnComponent } from './shared/navbar-btn/navbar-btn.component';
import { DefoultBtnComponent } from './shared/defoult-btn/defoult-btn.component';
import { PositionCaruselComponent } from './shared/position-carusel/position-carusel.component';

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
    MultyItemCaruselComponent,
    NavbarBtnComponent,
    DefoultBtnComponent,
    PositionCaruselComponent,
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
