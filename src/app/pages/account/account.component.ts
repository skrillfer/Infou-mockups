import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { BackendResponse, UserLoggedIn } from 'src/app/services/interface.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  profileForm = new FormGroup({

    firstName : new FormControl('',[Validators.required]),
    secondName : new FormControl(''),
    thirdName : new FormControl(''),
    lastName : new FormControl('',[Validators.required]),
    secondLastName : new FormControl(''),
    marriedLastName : new FormControl('')    
  });
  constructor(private storage: Storage, private router:Router, private dat: DataService) {
    this.storage.get('USER_INFO').then(us=>{
      const{firstName,secondName,
        thirdName,lastName,secondLastName,
        marriedLastName}
        = us;
        //console.log(us);
      this.profileForm.patchValue({
        firstName,secondName,
        thirdName,lastName,secondLastName,
        marriedLastName
      });
    });
    
  }

  ngOnInit() {}


  onCancelEditAccount(){
    this.router.navigateByUrl("tabs/tab1");
  }

  async onEditInformationAccount(){
    if(this.profileForm.valid){
        const userInfo = await  this.storage.get('USER_INFO') as UserLoggedIn;
        this.dat.updateInformationUser({...this.profileForm.value, idUser:userInfo.idUser}).subscribe( async (response: BackendResponse)=>{
          await this.storage.set('USER_INFO',{...userInfo,...this.profileForm.value});
          this.dat.presentAlertConfirm([{text:'Entendido',handler: ()=> this.router.navigateByUrl("tabs/tab1")}],response.status?'Exito':'Error',response.message);
        },(err)=>{
          this.dat.presentAlertConfirm(['Entendido'],'Error',err.message);
        });
    }else{
      this.dat.presentAlertConfirm(['Entendido'],'Error','Por favor, verifique los datos ingresados.');
    }
  }
}
