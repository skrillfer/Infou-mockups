import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  private loggedIn: boolean = false;
  constructor(private router: Router, private auth : AuthenticationService) {
    this.auth.authState.subscribe(state => {
      this.loggedIn = state;
      if (state) {
        this.router.navigate(['/tabs/tab1']);
      } else {
        this.router.navigate(['/signin']);
      }
    });
  }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const result = await this.auth.isAuthenticated();
    if (result) {
      return true;
    }
    return false;
  }

  public getGuardAuthentication(): boolean {
    return this.loggedIn;
  }

}
