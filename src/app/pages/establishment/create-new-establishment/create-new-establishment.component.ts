import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendResponse } from 'src/app/services/interface.services';

@Component({
  selector: 'app-create-new-establishment',
  templateUrl: './create-new-establishment.component.html',
  styleUrls: ['./create-new-establishment.component.scss']
})
export class CreateNewEstablishmentComponent implements OnInit {
  @Input() emitNewEstablishment;
  profileForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    nit : new FormControl('',[Validators.required]),
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

  createEstablishmentSubmit(){
    if(this.profileForm.valid){
      const { name, nit } = this.profileForm.value;
      this.dat.createEstablishment({
        name,nit
      }).subscribe((resp:BackendResponse) => {
        if(resp.status){
          this.emitNewEstablishment(resp.data);
          this.dat.presentAlertConfirm(['Entendido'],'Exito','Establecimiento agregado correctamente.')
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
