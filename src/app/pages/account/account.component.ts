import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
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
    
    membership  : new FormControl('',[Validators.required]),
    paymentPeriod  : new FormControl('',[Validators.required])
  });
  constructor(private storage: Storage) {
    this.storage.get('USER_INFO').then(us=>{
      const{email,nit,defaultEstablishment,
        regimenISR,regimenIVA,fiscalAddress,
        commercialAddress,firstName,secondName,
        thirdName,lastName,secondLastName,
        marriedLastName,membership,paymentPeriod}
        = us;
        console.log(us);
      this.profileForm.patchValue({
        email,nit,defaultEstablishment,
        regimenISR,regimenIVA,fiscalAddress,
        commercialAddress,firstName,secondName,
        thirdName,lastName,secondLastName,
        marriedLastName,membership,paymentPeriod
      });
    });
    
  }

  ngOnInit() {}

}
