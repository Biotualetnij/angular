import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponent } from './components/login-signup-system/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  bsModalRef?: BsModalRef;
  constructor(
    private authService: AuthService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']); // go to login if not authenticated
      this.bsModalRef = this.modalService.show(LoginComponent);
      return false;
    }
    return true;
  }
}
