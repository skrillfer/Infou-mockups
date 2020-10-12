import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { LoadingController } from '@ionic/angular';
import { BackendResponse } from 'src/app/services/interface.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    nit: new FormControl('',[Validators.required]),
    defaultEstablishment: new FormControl('',[Validators.required]),
    regimenISR: new FormControl('',[Validators.required]),
    regimenIVA: new FormControl('',[Validators.required]),
    fiscalAddress: new FormControl('',[Validators.required]),

    commercialAddress : new FormControl('',[Validators.required]),
    firstName : new FormControl('',[Validators.required]),
    secondName : new FormControl(''),
    thirdName : new FormControl(''),
    lastName : new FormControl('',[Validators.required]),
    secondLastName : new FormControl(''),
    marriedLastName : new FormControl(''),
    password : new FormControl('',[Validators.required]),
    confirmPassword : new FormControl('',[Validators.required]),

    membership  : new FormControl('',[Validators.required]),
    paymentPeriod  : new FormControl('',[Validators.required])
  });

  constructor(private loadingController: LoadingController,
    private dat: DataService, private router: Router) { }

  ngOnInit() {}
 
  onSumbitSignUp(){
    if(this.profileForm.valid){
      const { password, email, confirmPassword,  ...othersValues } = this.profileForm.value;
      if(password !== confirmPassword){
        this.dat.presentAlertConfirm(['Entendido'],'Verificar','Passwords no coinciden.');
        return;
      }
      this.loadingController.create({
        message: 'Procesando...',
        backdropDismiss: true
      }).then((res) => {
        res.present();
        this.dat.userSignUp({...othersValues,email:email.trim(), password:password.trim(),idBank:"", isFinalUser:1}).subscribe((resp:BackendResponse) => {
          const { status, message } = resp;
          this.hideLoader();
          if(status){
            this.dat.presentAlertConfirm(
              [{
                text:'Entendido',
                handler: () => {
                  this.router.navigateByUrl('/signin');
                }
              }],
              'Exito',`Su usuario fue registrado correctamente, recibira un correo de confirmacion a ${othersValues.email}.`);
          }else{
            this.dat.presentAlertConfirm(['Entendido'],'Error',message);
          }
        },(err)=>{
          this.hideLoader();
          this.dat.presentAlertConfirm(['Entendido'],'Error',err.message);
        });
      });
    }else{
      this.dat.presentAlertConfirm(['Entendido'],'Faltan datos','Por favor complete todos los campos requeridos.')
    } 
  }

  hideLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }
}
