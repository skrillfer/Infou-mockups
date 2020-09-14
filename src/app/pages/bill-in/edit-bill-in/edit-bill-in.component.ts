import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalController, Platform, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendResponse, BillIn } from 'src/app/services/interface.services';

@Component({
  selector: 'app-edit-bill-in',
  templateUrl: './edit-bill-in.component.html',
  styleUrls: ['./edit-bill-in.component.scss']
})
export class EditBillInComponent implements OnInit {
  @Input() emitEdittedBill;
  @Input() _id:string;
  profileForm : FormGroup;
  loading =true;
  constructor(
    private modalController: ModalController,
    private dat: DataService,
    private loadingController: LoadingController) {
      this.profileForm = new FormGroup({
        noAuthorization: new FormControl('',[Validators.required]),
        date: new FormControl('',[Validators.required]),
        name: new FormControl('',[Validators.required]),
        nit : new FormControl('',[Validators.required]),
        serieSAT : new FormControl('',[Validators.required]),
        noSAT : new FormControl('', [Validators.required]),
        value : new FormControl('',[Validators.required]),
        type : new FormControl('',[Validators.required]),
      });
  }

  ngOnInit() {
    this.loadingController.create({
      message: 'Cargando...',
      backdropDismiss: true
    }).then((res) => {
      res.present();
      this.dat.getOneBillIn(this._id).subscribe((resp:BackendResponse)=>{
        if(resp.status){
          const { noAuthorization,date,name,nit,serieSAT,noSAT,value,type } = resp.data as BillIn;
          this.profileForm.patchValue({
            noAuthorization,date:new Date(date).toISOString().substring(0, 10),name,nit,serieSAT,noSAT,value,type
          });
        }
        this.loading = false;
        this.hideLoader();
      },()=>{this.loading = false;this.hideLoader();});
    });
       
  }

  editBillSubmit(){

    if(this.profileForm.valid){

      this.loadingController.create({
        message: 'Editando...',
        backdropDismiss: true
      }).then((res) => {
        res.present();
        const {noAuthorization,date,name,nit,serieSAT,noSAT,value,type} = this.profileForm.value;
        this.dat.updateSpecificBillIn(this._id,{noAuthorization,date,name,nit,serieSAT,noSAT,value,type}).subscribe((resp:BackendResponse)=>{
          this.hideLoader();

          if(resp.status){
            this.emitEdittedBill({noAuthorization,date,name,nit,serieSAT,noSAT,value,type,_id:this._id});
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
