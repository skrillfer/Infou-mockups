import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillOutComponent } from './bill-out.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateNewBillOutComponent } from './create-new-bill-out/create-new-bill-out.component';
import { EditBillOutComponent } from './edit-bill-out/edit-bill-out.component';



@NgModule({
  declarations: [BillOutComponent, CreateNewBillOutComponent, EditBillOutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BillOutComponent
      }
    ]),
    IonicModule
  ]
})
export class BillOutModule { }
