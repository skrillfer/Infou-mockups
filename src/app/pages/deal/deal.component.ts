/**
 * Deal Screen
 * @author    ThemesBuckets <themesbuckets@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { DealsService } from '../../services/deals.service';
import { CartComponent } from '../cart/cart.component';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss'],
})
export class DealComponent implements OnInit {

  deals: any = [];
  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    secondName: new FormControl(''),
    othersName: new FormControl(''),
    lastName: new FormControl('',[Validators.required]),
    secondLastName: new FormControl('',),

    nationality : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]),
    cui : new FormControl('', [Validators.required]),
    passport : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.required]),
    nit : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    confirmPassword : new FormControl('',[Validators.required])
  });
  constructor(private dealsService: DealsService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.getDeals();
  }

  // Get list of deals
  getDeals() {
    this.deals = this.dealsService.getDeals();
  }

  // Go to cart page function
  async gotoCartPage() {
    const modal = await this.modalController.create({
      component: CartComponent
    });
    return await modal.present();
  }

}
