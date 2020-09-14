import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalController, Platform, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendResponse, Establishment } from 'src/app/services/interface.services';

@Component({
  selector: 'app-edit-establishment',
  templateUrl: './edit-establishment.component.html',
  styleUrls: ['./edit-establishment.component.scss']
})
export class EditEstablishmentComponent implements OnInit {

  @Input() emitEdittedEstablishment;
  @Input() _id:string;
  profileForm : FormGroup;
  loading =true;
  constructor(
    private modalController: ModalController,
    private dat: DataService,
    private loadingController: LoadingController) {
      this.profileForm = new FormGroup({
        name: new FormControl('',[Validators.required]),
        nit : new FormControl('',[Validators.required]),
      });
  }

  ngOnInit() {
    this.loadingController.create({
      message: 'Cargando...',
      backdropDismiss: true
    }).then((res) => {
      res.present();
      this.dat.getOneEstablishment(this._id).subscribe((resp:BackendResponse)=>{
        if(resp.status){
          const { name,nit } = resp.data as Establishment;
          this.profileForm.patchValue({
            name,nit
          });
        }
        this.loading = false;
        this.hideLoader();
      },()=>{this.loading = false;this.hideLoader();});
    });
       
  }

  editEstablishmentSubmit(){

    if(this.profileForm.valid){

      this.loadingController.create({
        message: 'Editando...',
        backdropDismiss: true
      }).then((res) => {
        res.present();
        const { name,nit } = this.profileForm.value;
        this.dat.updateSpecificEstablishment(this._id,{ name,nit }).subscribe((resp:BackendResponse)=>{
          this.hideLoader();
          if(resp.status){
            this.emitEdittedEstablishment({name,nit,_id:this._id});
            this.dismiss();
          }else{
            this.dat.presentAlertConfirm(['Entendido'],"Error",resp.message);
          }
        },(err)=>{ 
          this.hideLoader();
          this.dat.presentAlertConfirm(['Entendido'],'Error',err.message)
        });
      });  
      
    }else{
      this.dat.presentAlertConfirm(['Entendido'],'Faltan datos','Por favor complete todos los campos requeridos.');
    }
  }
  
  hideLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
