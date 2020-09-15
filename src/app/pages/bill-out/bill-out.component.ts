import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { CreateNewBillOutComponent } from './create-new-bill-out/create-new-bill-out.component';
import { BillIn, BackendResponse, BillOut } from 'src/app/services/interface.services';
import { DataService } from 'src/app/services/data.service';
import { EditBillOutComponent } from './edit-bill-out/edit-bill-out.component';

@Component({
  selector: 'app-bill-out',
  templateUrl: './bill-out.component.html',
  styleUrls: ['./bill-out.component.scss']
})
export class BillOutComponent implements OnInit {
  allBillOut: BillOut[] = [];
  loading = true;
  constructor(public modalController: ModalController,
    private loadingController: LoadingController,
    private dat: DataService) {
      this.dat.getAllBillsOut().subscribe((resp:BackendResponse)=>{
        if(resp.status){
          this.allBillOut = resp.data;
        }
        this.loading = false;
      });
  }
  
  ngOnInit(){

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
