import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { BackendResponse } from 'src/app/services/interface.services';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    private auth: AuthenticationService) { }

  ngOnInit() {}

  onSignInSubmit(){
    if(this.profileForm.valid){
      const {email, password} = this.profileForm.value;
      this.dat.userSignIn({email,password,loginType:""}).subscribe((resp:BackendResponse) => {
        if(resp.status){
          this.auth.login(resp.data);
          this.router.navigateByUrl("/tabs/tab3");
        }else{
          this.dat.presentAlertConfirm(['Entendido'],'Error',resp.message);
        }
      },(err)=>{
        this.dat.presentAlertConfirm(['Entendido'],'Error',err.message)
      }); 
    }else{
      this.dat.presentAlertConfirm(['Entendido'],'Faltan datos','Por favor complete todos los campos requeridos.')
    }
  }

}
