import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import { User, SignInContainer, ApplicationForm, Stage, UserLoggedIn } from 'src/app/services/interface.services';
import { AlertController } from '@ionic/angular';


import { forkJoin, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { SignInContainer,User, BillIn, Establishment } from './interface.services';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private host:string = 'http://localhost:42100'

  // LOGIN
  private apiLogin:any=`${this.host}/users/login`;
  // REGISTER
  private apiRegister:any=`${this.host}/users/register`;
  // BILL IN
  private apiBillIn:any = `${this.host}/bill-in`
  
  // ESTABLISHMENT
  private apiEstablishment:any = `${this.host}/establishment`
  
  constructor(private http: HttpClient,
    private alertController: AlertController,
    private authService: AuthenticationService) { }


    // Multiple Request
  public requestDataFromMultipleSources(sources: any[]): Observable<any[]> {
    return forkJoin(sources);
  }

  //In - FACT
  //Out - FACT

  // Auth Service
  userSignIn(sigin: SignInContainer){
    return this.http.post(this.apiLogin,sigin).pipe(data=> data);
  }

  userSignUp(user: User){
    return this.http.post(`${this.apiRegister}`,user).pipe(data=> data);
  }

  //Establishment
  createEstablishment(body:Establishment){
    return this.http.post(`${this.apiEstablishment}`,body).pipe(data => data);
  }
  updateSpecificEstablishment(id,body){
    return this.http.put(`${this.apiEstablishment}/${id}`,body).pipe(data => data);
  }

  deteleSpecificEstablishment(id){
    return this.http.delete(`${this.apiEstablishment}/${id}`).pipe(data => data);
  }
  
  getAllEstablishments(){
    return this.http.get(`${this.apiEstablishment}`).pipe(data => data);
  }

  getOneEstablishment(id){
    return this.http.get(`${this.apiEstablishment}/${id}`).pipe(data => data);
  }
  // Bill-in
  createBillIn(body:BillIn){
    return this.http.post(`${this.apiBillIn}`,body).pipe(data => data);
  }

  updateSpecificBillIn(id,body){
    return this.http.put(`${this.apiBillIn}/${id}`,body).pipe(data => data);
  }

  deteleSpecificBillIn(id){
    return this.http.delete(`${this.apiBillIn}/${id}`).pipe(data => data);
  }

  getAllBillsIn(){
    return this.http.get(`${this.apiBillIn}`).pipe(data => data);
  }

  getOneBillIn(id){
    return this.http.get(`${this.apiBillIn}/${id}`).pipe(data => data);
  }

  // Bill-out
  
  createBillOut(){

  }

  updateSpecificBillOut(){
    
  }
  
  deteleSpecificBillOut(){

  }

  getAllBillsOut(){

  }

  async presentAlertConfirm(buttons: any[],header:string,message:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: buttons
    });
    await alert.present();
  }
}
