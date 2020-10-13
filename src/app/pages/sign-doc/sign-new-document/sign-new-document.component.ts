import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendResponse } from 'src/app/services/interface.services';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sign-new-document',
  templateUrl: './sign-new-document.component.html',
  styleUrls: ['./sign-new-document.component.css']
})
export class SignNewDocumentComponent implements OnInit {

  @Input() emitNewDocument;

  _currentDocs=[];
  
  profileForm = new FormGroup({
    password: new FormControl('',[Validators.required])
  });

  constructor( public modalController: ModalController, private dat: DataService, private loadingController: LoadingController, private storage: Storage) { }

  ngOnInit() {
  }

  // Back to previous page function
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  async signDocumentSubmit(){
      const { password } = this.profileForm.value;

      if(this._currentDocs.length>0 && password!==""){
        try {
          
          const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Por favor espere...'
          });
          await loading.present();
      
          var formData = new FormData();
          formData.append("file", this._currentDocs[0]);
          
          var request = new XMLHttpRequest();
          
          request.open("POST", `${this.dat.apiDocument}`);
          const tokenUser = await  this.storage.get('USER_INFO');
          request.setRequestHeader('Authorization', 'Bearer ' + tokenUser.token);
          request.setRequestHeader('password', password);        
          request.send(formData);
      
          request.addEventListener("load", async (evt) => {
            const { status,readyState,responseText,statusText } = evt.target as any;
            if (readyState == 4 && status == 200) {
              const { status:statusResp, data, message} = JSON.parse(responseText) as BackendResponse;
              if(statusResp){
                this.dat.presentAlertConfirm(['Entendido'],'Exito',message);
                this.dismiss();    
                this.emitNewDocument(); 
              }
            }
            loading.dismiss();
          }); 
        } catch (error) {
          console.log(error);
          
        }
      
    }else{
      this.dat.presentAlertConfirm(['Entendido'],'Faltan datos','Por favor complete todos los campos requeridos.')
    }
  }

  changeListener(event:any){
    const pickedFile = (event.target as HTMLInputElement).files[0];

    if(!pickedFile){
      return;
    }
    const extension = pickedFile.type;
    switch (extension) {
      case 'application/pdf':
        break;
      default:
        this.dat.presentAlertConfirm(['Entendido'],'Formato Invalido','El tipo de archivo que has seleccionado no es un archivo pdf, intentalo de nuevo.');
        return;
    }
    if(event.target.files && event.target.files.length) 
      this._currentDocs = event.target.files;
    
   // console.log(event);    
  }


}
