import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillInComponent } from './bill-in.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateNewBillInComponent } from './create-new-bill-in/create-new-bill-in.component';
import { EditBillInComponent } from './edit-bill-in/edit-bill-in.component';



@NgModule({
  declarations: [BillInComponent, CreateNewBillInComponent, EditBillInComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BillInComponent
      }
    ]),
    IonicModule,
  ]
})
export class BillInModule { }
