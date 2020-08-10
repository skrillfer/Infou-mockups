import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    secondName: new FormControl(''),
    othersName: new FormControl(''),
    lastName: new FormControl('',[Validators.required]),
    secondLastName: new FormControl('',),

    nationality : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]),
    cui : new FormControl('', [Validators.required]),
    passport : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.required]),
    nit : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    confirmPassword : new FormControl('',[Validators.required])
  });
  constructor() { }

  ngOnInit() {}

}
