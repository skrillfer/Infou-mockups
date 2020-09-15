import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendResponse } from 'src/app/services/interface.services';

@Component({
  selector: 'app-create-new-bill-out',
  templateUrl: './create-new-bill-out.component.html',
  styleUrls: ['./create-new-bill-out.component.scss']
})
export class CreateNewBillOutComponent implements OnInit {
  @Input() emitNewBill;
  profileForm = new FormGroup({
    noAuthorization: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    nit : new FormControl('',[Validators.required]),
    serieSAT : new FormControl('',[Validators.required]),
    noSAT : new FormControl('', [Validators.required]),
    value : new FormControl('',[Validators.required]),
    type : new FormControl('',[Validators.required]),
  });

  constructor( public modalController: ModalController,
    private dat: DataService,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }

  // Back to previous page function
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  createBillSubmit(){
    if(this.profileForm.valid){
      const {noAuthorization,date, name, nit,noSAT,serieSAT,type,value} = this.profileForm.value;
      this.dat.createBillOut({
        noAuthorization,date,name,nit,
        noSAT,serieSAT,type,value
      }).subscribe((resp:BackendResponse) => {
        if(resp.status){
          this.emitNewBill(resp.data);
          this.dat.presentAlertConfirm(['Entendido'],'Exito','Factura agregada correctamente.')
          this.dismiss();
        }
      },(error)=>{
        this.dat.presentAlertConfirm(['Entendido'],'Error',error.message)
      });
    }else{
      this.dat.presentAlertConfirm(['Entendido'],'Faltan datos','Por favor complete todos los campos requeridos.')
    }
  }

}