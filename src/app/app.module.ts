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
import { HttpClientModule } from '@angular/common/http';
import { EditBillInComponent } from './pages/bill-in/edit-bill-in/edit-bill-in.component';
import { EstablishmentModule } from './pages/establishment/establishment.module';
import { CreateNewEstablishmentComponent } from './pages/establishment/create-new-establishment/create-new-establishment.component';
import { EditEstablishmentComponent } from './pages/establishment/edit-establishment/edit-establishment.component';


@NgModule({
  declarations: [AppComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent],
  entryComponents: [ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    CreateNewBillInComponent,
    EditBillInComponent,
    CreateNewEstablishmentComponent,
    EditEstablishmentComponent],
  imports: [BrowserModule,HttpClientModule, IonicModule.forRoot(), AppRoutingModule,
    BrowserAnimationsModule, IonicStorageModule.forRoot(), BillInModule, EstablishmentModule],
  providers: [
    DataService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
