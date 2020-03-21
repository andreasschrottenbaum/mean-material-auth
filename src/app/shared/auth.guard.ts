import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const expectedRole = next.data.expectedRole;
      const userRole = this.auth.user?.role;

      if (!expectedRole) {
        return true;
      }

      if (expectedRole === 'guest' && this.auth.user.role) {
        return false;
      }

      // Following 'algorhitm' will be changed in the future
      if (userRole) {
        console.log(userRole);
      }

      return true;
  }
}
