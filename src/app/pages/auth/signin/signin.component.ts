import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { BackendResponse } from 'src/app/services/interface.services';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required]),
  });

  constructor(private dat: DataService,
    private router: Router,
    private auth: AuthenticationService,
    private loadingController: LoadingController,
    private menuController: MenuController,
    ) { }

  ngOnInit() {}

  onSignInSubmit(){
    if(this.profileForm.valid){
      const {email, password} = this.profileForm.value;
      this.loadingController.create({
        message: 'Procesando...',
        backdropDismiss: true
      }).then((res) => {
        res.present();
        this.dat.userSignIn({email,password,loginType:""}).subscribe((resp:BackendResponse) => {
          this.hideLoader();
          if(resp.status){
            this.menuController.enable(true);
            this.auth.login(resp.data);
            //this.router.navigateByUrl("/tabs/tab3");
            console.log('12');
          }else{
            this.dat.presentAlertConfirm(['Entendido'],'Error',resp.message);
          }
        },(err)=>{
          console.log(err);
          this.hideLoader();
          this.dat.presentAlertConfirm(['Entendido'],'Error',err.message)
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
