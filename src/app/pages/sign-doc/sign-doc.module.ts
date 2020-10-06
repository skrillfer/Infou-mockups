import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignDocComponent } from './sign-doc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SignNewDocumentComponent } from './sign-new-document/sign-new-document.component';

@NgModule({
  declarations: [SignDocComponent, SignNewDocumentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignDocComponent
      }
    ]),
    IonicModule,
  ]
})

export class SignDocModule { }
