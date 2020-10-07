import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { CreateNewBillOutComponent } from './create-new-bill-out/create-new-bill-out.component';
import { BillIn, BackendResponse, BillOut } from 'src/app/services/interface.services';
import { DataService } from 'src/app/services/data.service';
import { EditBillOutComponent } from './edit-bill-out/edit-bill-out.component';
import { FormControl, FormGroup } from '@angular/forms';
import { getCurrentMonthLastDay, getCurrentMonthFirstDay,getMonthName } from 'src/app/utils/utils';
import { Capacitor, Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
const { Filesystem } = Plugins;
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-bill-out',
  templateUrl: './bill-out.component.html',
  styleUrls: ['./bill-out.component.scss']
})
export class BillOutComponent implements OnInit {
  allBillOut: BillOut[] = [];
  loading = true;
  profileForm: FormGroup;

  constructor(public modalController: ModalController,
    private loadingController: LoadingController,
    private dat: DataService,private storage: Storage) {
      
  }
  
  ngOnInit(){

  }

  initView(){
    this.loadingController.create({
      message: 'Cargando...',
      backdropDismiss: true
    }).then(async (res) => {
      res.present();

      const date = new Date();

      this.profileForm = new FormGroup({
        year: new FormControl(date.getFullYear()+''),
        month: new FormControl(date.getMonth()+'')       
      });
      const tokenUser = await  this.storage.get('USER_INFO');

      this.dat.getByFilterBillOut({
        idUser: tokenUser.idUser,
        date: {
          $gte: getCurrentMonthFirstDay(new Date()),
          $lt: getCurrentMonthLastDay(new Date())
        }
      }).subscribe((resp:BackendResponse)=>{
        if(resp.status){
          this.allBillOut = resp.data;
        }
        this.loading = false;
        this.hideLoader();
      },(err)=>{
        this.loading = false;
        this.hideLoader();
      });

      this.profileForm.controls['year'].valueChanges.subscribe(val => {
        if(val){
          let createDate = new Date();
          createDate = new Date(Number(val),Number(this.profileForm.value['month']),1);
          this.dat.getByFilterBillOut({
            date: {
              $gte: getCurrentMonthFirstDay(createDate),
              $lt: getCurrentMonthLastDay(createDate)
            }
          }).subscribe((resp:BackendResponse)=>{
            if(resp.status){
              this.allBillOut = resp.data;
            }
            this.loading = false;
          },(err)=>{
            this.loading = false;
            this.hideLoader();
          });
        }
      });
      this.profileForm.controls['month'].valueChanges.subscribe(val => {
        if(val){
          if(val){
            let createDate = new Date();
            createDate = new Date(Number(this.profileForm.value['year']),Number(val),1);
            this.dat.getByFilterBillOut({
              date: {
                $gte: getCurrentMonthFirstDay(createDate),
                $lt: getCurrentMonthLastDay(createDate)
              }
            }).subscribe((resp:BackendResponse)=>{
              if(resp.status){
                this.allBillOut = resp.data;
              }
              this.loading = false;
            },(err)=>{
              this.loading = false;
              this.hideLoader();
            });
          }
        }
      });
    });
  }

  ionViewWillEnter() {
    this.allBillOut = [];
    this.loading = true;
    this.profileForm = null;
    this.initView();
  }

  hideLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }

  async billOutGenerateReport(){

    const user = await this.storage.get('USER_INFO');
    const fileName = `[O]Reporte_${getMonthName(new Date(Number(this.profileForm.value['year']),Number(this.profileForm.value['month']),1))}_${this.profileForm.value['year']}`
    this.dat.billOutGenerateReport({name:fileName,bills:this.allBillOut,user},{responseType:'blob'}).subscribe((resp:any)=>{
      const blob:any = new Blob([resp], {type: "application/pdf"});
      try {
        if(Capacitor.platform==='web'){
          window.open(window.URL.createObjectURL(blob));
        }else{
          var reader = new FileReader();
          reader.readAsDataURL(blob); 
          reader.onloadend = async () =>{
            var base64data:any = reader.result; 
            //const objectUrl = window.URL.createObjectURL(blob)
            //window.open(objectUrl) 
            await Filesystem.writeFile({
              path: `${fileName}.pdf`,
              data: base64data,
              directory: FilesystemDirectory.Documents,
              // encoding: FilesystemEncoding.UTF8
            });
            const header = 'Aviso!';
            const buttons = [
              {
                text: 'Entendido',
                handler: () => {}
              }
            ];
            this.dat.presentAlertConfirm(buttons,header,`Se ha descargado ${fileName} en Documentos`);
          }
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
    },(err)=>{
      this.dat.presentAlertConfirm(["Entendido"],"Error",err.message);
    });
  }
  receivedCreated(event:BillIn){
    this.allBillOut.push(event);
  }

  receivedEdited(event:BillIn){
    var index = this.allBillOut.findIndex(o => o._id===event._id);
    if (index !== -1) {
        this.allBillOut[index] = event;
    }
  }

  async goToCreateNewBillIn() {
    const modal = await this.modalController.create({
      component: CreateNewBillOutComponent,
      componentProps: { 
        "emitNewBill" : (event)=> this.receivedCreated(event)
      }
    });
    return await modal.present();
  }

  async goToEditBillIn(_id:string){
    const modal = await this.modalController.create({
      component: EditBillOutComponent,
      componentProps: { 
        "emitEdittedBill" : (event) => this.receivedEdited(event),
        "_id": _id
      }
    });
    return await modal.present();
  }

  deleteSubmit(_id:string){
    this.dat.presentAlertConfirm([
      {
        text: 'Si, eliminalo.',
        handler: () => {
          this.dat.deteleSpecificBillOut(_id).subscribe((resp:BackendResponse) => {
            if(resp.status){
              this.allBillOut = this.allBillOut.filter(o=> o._id!==_id);
              this.dat.presentAlertConfirm(["Entendido"],"Mensaje","Eliminado correctamente.");
            }else{
              this.dat.presentAlertConfirm(["Entendido"],"Error",resp.message);
            }
          },(err)=>{
            this.dat.presentAlertConfirm(["Entendido"],"Error",err.message);
          });
        }
      },
      {
        text: 'Cancelar',
        handler: () => {}
      }
    ],"No podras revertir esto","Estas seguro de eliminar esta factura.");
  }

  getFormatDate(date:string){
    return new Date(date).toISOString().substring(0, 10);
  }
}
