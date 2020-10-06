import { Component, OnInit } from '@angular/core';
import { Document, BackendResponse } from 'src/app/services/interface.services';
import { ModalController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { SignNewDocumentComponent } from './sign-new-document/sign-new-document.component';
import { Storage } from '@ionic/storage';
import { Capacitor, Filesystem, FilesystemDirectory } from '@capacitor/core';

@Component({
  selector: 'app-sign-doc',
  templateUrl: './sign-doc.component.html',
  styleUrls: ['./sign-doc.component.css']
})
export class SignDocComponent implements OnInit {

  allDocs=[];
  loading=true;

  constructor(public modalController: ModalController, private loadingController: LoadingController, private dat: DataService, private storage: Storage) { 
    
    this.listDocuments();
    this.loading=false;
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

  receivedCreated(event:Document){
    this.listDocuments();
  }

  async listDocuments(){
    const tokenUser = await  this.storage.get('USER_INFO');

    this.dat.getAllDocuments({idUser: tokenUser.idUser}).subscribe((resp:BackendResponse)=>{
      if(resp.status){
        this.allDocs = [...resp.data];
      }
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
  
}
