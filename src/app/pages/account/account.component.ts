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
    nit: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),

    firstName : new FormControl('',[Validators.required]),
    secondName : new FormControl(''),
    thirdName : new FormControl(''),
    lastName : new FormControl('',[Validators.required]),
    secondLastName : new FormControl(''),
    marriedLastName : new FormControl('')    
  });
  constructor(private storage: Storage) {
    this.storage.get('USER_INFO').then(us=>{
      const{nit,address,firstName,secondName,
        thirdName,lastName,secondLastName,
        marriedLastName}
        = us;
        //console.log(us);
      this.profileForm.patchValue({
        nit,address,firstName,secondName,
        thirdName,lastName,secondLastName,
        marriedLastName
      });
    });
    
  }

  ngOnInit() {}

}
