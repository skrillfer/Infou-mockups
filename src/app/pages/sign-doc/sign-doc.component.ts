import { Component, OnInit, ViewChild } from '@angular/core';
import { Document, BackendResponse } from 'src/app/services/interface.services';
import { ModalController, LoadingController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { SignNewDocumentComponent } from './sign-new-document/sign-new-document.component';
import { Storage } from '@ionic/storage';
import { castDateMongo } from 'src/app/utils/utils';
import { ToastController } from '@ionic/angular';

import { Capacitor,Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
import { FormGroup, FormControl } from '@angular/forms';
const { Filesystem } = Plugins;

@Component({
  selector: 'app-sign-doc',
  templateUrl: './sign-doc.component.html',
  styleUrls: ['./sign-doc.component.css']
})
export class SignDocComponent implements OnInit {
  @ViewChild('input_search_by_name',{ static: true }) inputByName : HTMLInputElement;

  castDateMongoRef = castDateMongo;
  allDocs: Document[]=[];
  loading=true;
  customPickerOptions: any;


  profileForm : FormGroup = new FormGroup(
    {
      searchDate : new FormControl(null)
    }
    );
  constructor(public navCtrl: NavController,
     public modalController: ModalController, 
     private loadingController: LoadingController, 
     private dat: DataService,
     private storage: Storage,
     public toastController: ToastController) { 
    
    this.listDocuments();
    this.loading=false;
    this.customPickerOptions = {
      buttons: [
      {
        text: 'Cancelar',
        handler: () => {return true;}
      },
      {
        text: 'Limpiar',
        handler: () => this.profileForm.patchValue({ searchDate: null })
      },
      {
        text: 'Hecho',
        handler: (evt) => {
          const {day,month,year} = evt;
          this.profileForm.patchValue({ 
            searchDate: new Date(year.value,month.value,day.value).toISOString().split('T')[0]  
          })
        }
      }]
    }
  }

  ngOnInit() {
  }

  async goToAddNewDocument(){
    const modal = await this.modalController.create({
      component: SignNewDocumentComponent,
      componentProps: { 
        "emitNewDocument" : (event)=> this.receivedCreated(event)
      }
    });
    return await modal.present();
  }

  receivedCreated(event){
    this.listDocuments();
  }

  refresh(){
    this.listDocuments();
  }

  async listDocuments(){
    const tokenUser = await  this.storage.get('USER_INFO');

    this.dat.getAllDocumentsByCondition({idUser: tokenUser.idUser,inactive:false}).subscribe((resp:BackendResponse)=>{
      if(resp.status){
        this.allDocs=resp.data;        
        //this.allDocs.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
    });
  }

  async filterDocumentsByName(){
    console.log(this.inputByName.value);
    const tokenUser = await  this.storage.get('USER_INFO');
    this.dat.getAllDocumentsByCondition({idUser: tokenUser.idUser,inactive:false, name:{ $regex :`.*${this.inputByName.value}.*`, $options: "i"} }).subscribe((resp:BackendResponse)=>{
      if(resp.status){
        this.allDocs=resp.data;        
        //this.allDocs.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
    });
  }

  deleteFile(id){
    this.dat.deteleSpecificDocument(id).subscribe((resp:BackendResponse)=>{
      const header = 'Aviso!';
      const buttons = [
        {
          text: 'Entendido',
          handler: () => {}
        }
      ];
      if(resp.status && resp.status===true)
            this.dat.presentAlertConfirm(buttons,header,`Documento Eliminado!`);
      else
        this.dat.presentAlertConfirm(buttons,header,`Problemas al eliminar documento`);

      this.listDocuments();
    });
  }

  downloadFile(id,name){
    
    try {
      this.dat.getOneDocument(id,{responseType:  'blob'})
      .subscribe(async (datablob:any) => {
        
        const blob:any = new Blob([datablob], {type: "application/pdf"});
        if(Capacitor.platform==='web'){
          window.open(window.URL.createObjectURL(blob));
        }else{
          const fileName = name;
          try {
            var reader = new FileReader();
            reader.readAsDataURL(blob); 
            reader.onloadend = async () =>{
              var base64data:any = reader.result;  
              console.log(base64data);              
              await Filesystem.writeFile({
                path: fileName,
                data: base64data,
                directory: FilesystemDirectory.Documents,
              });
              
              const header = 'Aviso!';
              const buttons = [
                {
                  text: 'Entendido',
                  handler: () => {}
                }
              ];
              this.dat.presentAlertConfirm(buttons,header,`Se ha descargado ${name} en Documentos`);
            }
          } catch (error) {

            const header = 'Error!';
            const buttons = [
              {
                text: 'Entendido',
                handler: () => {}
              }
            ];
            this.dat.presentAlertConfirm(buttons,header,error.message);
          }
        }
        });
    } catch(e) {

      const header = 'Error!';
      const buttons = [
        {
          text: 'Entendido',
          handler: () => {}
        }
      ];
      this.dat.presentAlertConfirm(buttons,header,e.message);
    }
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

}
