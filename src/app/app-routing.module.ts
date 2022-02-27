import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login-signup-system/login/login.component';
import { SignupComponent } from './components/login-signup-system/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { LoginArgComponent } from './login-arg/login-arg.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'toDoList', component: ToDoListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-arg', component: LoginArgComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
