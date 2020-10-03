import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { BillInModule } from './pages/bill-in/bill-in.module';
import { CreateNewBillInComponent } from './pages/bill-in/create-new-bill-in/create-new-bill-in.component';
import { DataService } from './services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditBillInComponent } from './pages/bill-in/edit-bill-in/edit-bill-in.component';
import { EstablishmentModule } from './pages/establishment/establishment.module';
import { CreateNewEstablishmentComponent } from './pages/establishment/create-new-establishment/create-new-establishment.component';
import { EditEstablishmentComponent } from './pages/establishment/edit-establishment/edit-establishment.component';
import { BillOutModule } from './pages/bill-out/bill-out.module';
import { CreateNewBillOutComponent } from './pages/bill-out/create-new-bill-out/create-new-bill-out.component';
import { EditBillOutComponent } from './pages/bill-out/edit-bill-out/edit-bill-out.component';
import { LoginGuardService } from './services/login.guard.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth.guard.service';
import { AuthInterceptorService } from './services/auth.interceptor.service';
import { HeaderMenuBtnComponent } from './components/header-menu-btn/header-menu-btn.component';


@NgModule({
  declarations: [AppComponent,
    ProductDetailsComponent,
    CartComponent, HeaderMenuBtnComponent],
  entryComponents: [ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    CreateNewBillInComponent,
    CreateNewBillOutComponent,
    EditBillInComponent,
    EditBillOutComponent,
    CreateNewEstablishmentComponent,
    EditEstablishmentComponent],
  imports: [BrowserModule,HttpClientModule, IonicModule.forRoot(), AppRoutingModule,
    BrowserAnimationsModule, IonicStorageModule.forRoot(), BillInModule, EstablishmentModule, BillOutModule],
  providers: [
    DataService,
    LoginGuardService,
    AuthenticationService,
    AuthGuardService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
