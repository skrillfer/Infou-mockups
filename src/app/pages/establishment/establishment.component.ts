import { Component, OnInit } from '@angular/core';
import { Establishment, BackendResponse } from 'src/app/services/interface.services';
import { ModalController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { EditEstablishmentComponent } from './edit-establishment/edit-establishment.component';
import { CreateNewEstablishmentComponent } from './create-new-establishment/create-new-establishment.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.scss']
})
export class EstablishmentComponent implements OnInit {

  allEstablishments: Establishment[] = [];
  loading = true;
  constructor(public modalController: ModalController,
    private loadingController: LoadingController,
    private dat: DataService,private storage: Storage) {
      
  }
  
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.allEstablishments = [];
    this.loading = true;
    this.initView();
  }

  initView(){
    this.loadingController.create({
      message: 'Cargando...',
      backdropDismiss: true
    }).then(async (res) => {
      res.present();
      const tokenUser = await  this.storage.get('USER_INFO');

      this.dat.getByFilterEstablishment({idUser: tokenUser.idUser}).subscribe((resp:BackendResponse)=>{
        if(resp.status){
          this.allEstablishments = resp.data;
        }
        this.loading = false;
        this.hideLoader();
      },(err) => {
        this.loading = false;
        this.hideLoader();
      });
    });
  }


  hideLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }

  receivedCreated(event:Establishment){
    this.allEstablishments.push(event);
  }

  receivedEdited(event:Establishment){
    var index = this.allEstablishments.findIndex(o => o._id===event._id);
    if (index !== -1) {
        this.allEstablishments[index] = event;
    }
  }

  async goToEditEstablishment(_id:string){
    const modal = await this.modalController.create({
      component: EditEstablishmentComponent,
      componentProps: { 
        "emitEdittedEstablishment" : (event) => this.receivedEdited(event),
        "_id": _id
      }
    });
    return await modal.present();
  }
  
  async goToCreateNewEstablishment(){
    const modal = await this.modalController.create({
      component: CreateNewEstablishmentComponent,
      componentProps: { 
        "emitNewEstablishment" : (event)=> this.receivedCreated(event)
      }
    });
    return await modal.present();
  }

  deleteSubmitEstablishment(_id:string){
    this.dat.presentAlertConfirm([
      {
        text: 'Si, eliminalo.',
        handler: () => {
          this.dat.deteleSpecificEstablishment(_id).subscribe((resp:BackendResponse) => {
            if(resp.status){
              this.allEstablishments = this.allEstablishments.filter(o=> o._id!==_id);
              this.dat.presentAlertConfirm(["Entendido"],"Mensaje","Eliminado correctamente.");
            }else{
              this.dat.presentAlertConfirm(["Entendido"],"Error",resp.message);
            }
          });
        }
      },
      {
        text: 'Cancelar',
        handler: () => {}
      }
    ],"No podras revertir esto","Estas seguro de eliminar este establecimiento.");
  }
  
}
