import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  getPages() {
    return [
      {
        title: 'Home',
        url: '/tabs/tab1',
        icon: 'home'
      },
      /*{
        title: 'Shop',
        url: '/tabs/products',
        icon: 'basket'
      },
      {
        title: 'Deals',
        url: '/tabs/tab2',
        icon: 'gift'
      },
      {
        title: 'Wishlist',
        url: '/tabs/tab3',
        icon: 'heart'
      },
      {
        title: 'Notification',
        url: '/tabs/tab4',
        icon: 'md-notifications-outline'
      },
      {
        title: 'Categories',
        url: '/tabs/categories',
        icon: 'md-grid'
      },
      {
        title: 'Orders',
        url: '/tabs/orders',
        icon: 'md-checkmark-circle-outline'
      }*/
    ];
  }
}
