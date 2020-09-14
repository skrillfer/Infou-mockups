import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, LoadingController } from '@ionic/angular';
import { CreateNewBillInComponent } from './create-new-bill-in/create-new-bill-in.component';
import { BillIn, BackendResponse } from 'src/app/services/interface.services';
import { DataService } from 'src/app/services/data.service';
import { EditBillInComponent } from './edit-bill-in/edit-bill-in.component';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-bill-in',
  templateUrl: './bill-in.component.html',
  styleUrls: ['./bill-in.component.scss']
})
export class BillInComponent implements OnInit {
  allBillIn: BillIn[] = [];
  loading = true;
  constructor(public modalController: ModalController,
    private loadingController: LoadingController,
    private dat: DataService) {
      this.dat.getAllBillsIn().subscribe((resp:BackendResponse)=>{
        if(resp.status){
          this.allBillIn = resp.data;
        }
        this.loading = false;
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
