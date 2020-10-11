import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// Tab Routes
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sign-doc/sign-doc.module').then(m => m.SignDocModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../establishment/establishment.module').then(m => m.EstablishmentModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../bill-in/bill-in.module').then(m => m.BillInModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sign-doc/sign-doc.module').then(m => m.SignDocModule)
          }
        ]
      }/*,
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notification/notification.module').then(m => m.NotificationModule)
          }
        ]
      }*/,
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../account/account.module').then(m => m.AccountModule)
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../category/category.module').then(m => m.CategoryModule)
          }
        ]
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../products/products.module').then(m => m.ProductsModule)
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../orders/orders.module').then(m => m.OrdersModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
