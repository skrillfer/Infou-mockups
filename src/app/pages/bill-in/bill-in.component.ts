import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { CreateNewBillInComponent } from './create-new-bill-in/create-new-bill-in.component';
import { BillIn, BackendResponse } from 'src/app/services/interface.services';
import { DataService } from 'src/app/services/data.service';
import { EditBillInComponent } from './edit-bill-in/edit-bill-in.component';
import { FormGroup, FormControl } from '@angular/forms';
import { getCurrentMonthFirstDay, getCurrentMonthLastDay, getMonthName } from 'src/app/utils/utils';
import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
const { Filesystem } = Plugins;

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-bill-in',
  templateUrl: './bill-in.component.html',
  styleUrls: ['./bill-in.component.scss']
})
export class BillInComponent implements OnInit {
  allBillIn: BillIn[] = [];
  loading = true;
  profileForm: FormGroup;
  constructor(public modalController: ModalController,
    private loadingController: LoadingController,
    private storage: Storage,
    private dat: DataService) {
      const date = new Date();

      this.profileForm = new FormGroup({
        year: new FormControl(date.getFullYear()+''),
        month: new FormControl(date.getMonth()+'')       
      });
      this.dat.getByFilterBillIn(
        {
          date: {
            $gte: getCurrentMonthFirstDay(new Date()),
            $lt: getCurrentMonthLastDay(new Date())
          }
        }).subscribe((resp:BackendResponse)=>{
        if(resp.status){
          this.allBillIn = resp.data;
        }
        this.loading = false;
      });

      this.profileForm.controls['year'].valueChanges.subscribe(val => {
        if(val){
          let createDate = new Date();
          createDate = new Date(Number(val),Number(this.profileForm.value['month']),1);
          this.dat.getByFilterBillIn({
            date: {
              $gte: getCurrentMonthFirstDay(createDate),
              $lt: getCurrentMonthLastDay(createDate)
            }
          }).subscribe((resp:BackendResponse)=>{
            if(resp.status){
              this.allBillIn = resp.data;
            }
            this.loading = false;
          });
        }
      });
      this.profileForm.controls['month'].valueChanges.subscribe(val => {
        if(val){
          if(val){
            let createDate = new Date();
            createDate = new Date(Number(this.profileForm.value['year']),Number(val),1);
            this.dat.getByFilterBillIn({
              date: {
                $gte: getCurrentMonthFirstDay(createDate),
                $lt: getCurrentMonthLastDay(createDate)
              }
            }).subscribe((resp:BackendResponse)=>{
              if(resp.status){
                this.allBillIn = resp.data;
              }
              this.loading = false;
            });
          }
        }
      });
  }
  
  ngOnInit(){

  }

  receivedCreated(event:BillIn){
    this.allBillIn.push(event);
  }

  receivedEdited(event:BillIn){
    var index = this.allBillIn.findIndex(o => o._id===event._id);
    if (index !== -1) {
        this.allBillIn[index] = event;
    }
  }

  async goToCreateNewBillIn() {
    const modal = await this.modalController.create({
      component: CreateNewBillInComponent,
      componentProps: { 
        "emitNewBill" : (event)=> this.receivedCreated(event)
      }
    });
    return await modal.present();
  }

  async goToEditBillIn(_id:string){
    const modal = await this.modalController.create({
      component: EditBillInComponent,
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
          this.dat.deteleSpecificBillIn(_id).subscribe((resp:BackendResponse) => {
            if(resp.status){
              this.allBillIn = this.allBillIn.filter(o=> o._id!==_id);
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
    ],"No podras revertir esto","Estas seguro de eliminar esta factura.");
  }

  async billInGenerateReport(){

    const user = await this.storage.get('USER_INFO');
    const fileName = `[I]Reporte_${getMonthName(new Date(Number(this.profileForm.value['year']),Number(this.profileForm.value['month']),1))}_${this.profileForm.value['year']}`
    this.dat.billInGenerateReport({name:fileName,bills:this.allBillIn,user},{responseType:'blob'}).subscribe((resp:any)=>{
      const blob:any = new Blob([resp], {type: "application/pdf"});
      try {
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
    });
  }

  getFormatDate(date:string){
    return new Date(date).toISOString().substring(0, 10);
  }

  
}
