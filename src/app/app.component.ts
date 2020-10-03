/**
 * Main App Components
 * @author    ThemesBuckets <themesbuckets@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   AppsPlaces
 * 
 */

import { Component } from '@angular/core';
import { Plugins, Capacitor, App} from '@capacitor/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PagesService } from './services/pages.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuController: MenuController,
    private router: Router,
    private pagesService: PagesService,
    private auth: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then( async () => {
      if(Capacitor.isPluginAvailable('SplashScreen')){
        Plugins.SplashScreen.hide();
      }
      
      // Get Menus For Side Menu
      this.appPages = this.pagesService.getPages();

      const user = await this.auth.isAuthenticated();
      
      if (user) {
        //this.router.navigate(['/tabs/tab3']);
        this.auth.authState.next(true);
      }else{
        this.router.navigate(['/signin']);
        this.auth.authState.next(false);
      }

    });
  }

  // Signout Button
  signout() {
    this.auth.logout();
    this.router.navigate(['/signin']);
    this.menuController.enable(false); // Make Sidemenu disable
  }
}
