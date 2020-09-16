import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth.guard.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor(
    private auth : AuthenticationService,
    private authGuard: AuthGuardService,
    private router: Router) {
      this.auth.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['/tabs/tab1']);
        }
      });
    }

    async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const result = await this.auth.isAuthenticated();
      if (result) {
        return false;
      }
      return true;
    }
}
