import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserLoggedIn } from './interface.services';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  constructor(private storage: Storage,
    private router: Router) { }
  
  async login(user: UserLoggedIn){
    const response = await this.storage.set('USER_INFO', user);
    this.authState.next(true);
    this.router.navigateByUrl("/tabs/tab1");
  }

  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.authState.next(false);
      this.router.navigateByUrl("/signin");
    });
  }

  async isAuthenticated(): Promise<any> {
    const user = await this.storage.get('USER_INFO');
    if(user){
      return true;
    }else{
      return false;
    }
  }

}
