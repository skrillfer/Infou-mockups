import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { CreateNewBillInComponent } from './create-new-bill-in/create-new-bill-in.component';
import { BillIn, BackendResponse } from 'src/app/services/interface.services';
import { DataService } from 'src/app/services/data.service';
import { EditBillInComponent } from './edit-bill-in/edit-bill-in.component';
import { FormGroup, FormControl } from '@angular/forms';
import { getCurrentMonthFirstDay, getCurrentMonthLastDay } from 'src/app/utils/utils';
import { utils } from 'protractor';
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

  getFormatDate(date:string){
    return new Date(date).toISOString().substring(0, 10);
  }

  
}
