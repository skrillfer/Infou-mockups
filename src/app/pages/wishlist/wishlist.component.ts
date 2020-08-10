/**
 * Wishlist Screen
 * @author    ThemesBuckets <themesbuckets@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartComponent } from '../cart/cart.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
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
  products: Product[];

  constructor(private productsService: ProductsService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.getProductList();
  }

  // Get Products
  getProductList() {
    this.products = this.productsService.productList();
  }

  // Go to product details page
  async goToProductDetails(product) {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      componentProps: product
    });
    return await modal.present();
  }

  // Go to cart page
  async gotoCartPage() {
    const modal = await this.modalController.create({
      component: CartComponent
    });
    return await modal.present();
  }
}
