import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentComponent } from './establishment.component';
import { CreateNewEstablishmentComponent } from './create-new-establishment/create-new-establishment.component';
import { EditEstablishmentComponent } from './edit-establishment/edit-establishment.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EstablishmentComponent, CreateNewEstablishmentComponent, EditEstablishmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: EstablishmentComponent
      }
    ]),
    IonicModule
  ]
})
export class EstablishmentModule { }
