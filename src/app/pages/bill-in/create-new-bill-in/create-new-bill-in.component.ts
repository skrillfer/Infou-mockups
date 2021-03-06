import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendResponse } from 'src/app/services/interface.services';

interface responseBody{
  nombre:string;
  direccion:string;
}
interface responseEfact{
  return: responseBody;
}
@Component({
  selector: 'app-create-new-bill-in',
  templateUrl: './create-new-bill-in.component.html',
  styleUrls: ['./create-new-bill-in.component.scss']
})
export class CreateNewBillInComponent implements OnInit {
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
    private loadingController: LoadingController) {
      this.profileForm.controls['nit'].valueChanges.subscribe(val => {
        if(val && val.toString().length > 5){
          this.dat.getInfoByNit(val).subscribe((resp:responseEfact) => {
            if(resp.return && resp.return.nombre !== 'Nit no valido'){
              this.profileForm.patchValue({name:resp.return.nombre});
            }
          },(err)=>{
            console.log(err);
            //this.dat.presentAlertConfirm(['Entendido'],'Error',err.message)
          });
        }
      });
    }

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
      this.loadingController.create({
        message: 'Procesando...',
        backdropDismiss: true
      }).then((res) => {
        res.present();
        this.dat.createBillIn({
          noAuthorization,date,name,nit,
          noSAT,serieSAT,type,value
        }).subscribe((resp:BackendResponse) => {
          this.hideLoader();
          if(resp.status){
            this.emitNewBill(resp.data);
            this.dat.presentAlertConfirm(['Entendido'],'Exito','Factura agregada correctamente.')
            this.dismiss();
          }

        },(error)=>{
          this.hideLoader();
          this.dat.presentAlertConfirm(['Entendido'],'Error',error.message)
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
