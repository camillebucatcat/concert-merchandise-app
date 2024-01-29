import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPage } from './cart.page';

const routes: Routes = [
  {
    path: '',
    component: CartPage,
    // children: [
    //   {
    //     path: 'home',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
    //       }
    //     ]
    //   },
    //   {
    //     path: 'search',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
    //       }
    //     ]
    //   },
    //   {
    //     path: 'cart',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: () => import('../cart/cart.module').then(m => m.  CartPageModule)
    //       }
    //     ]
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPageRoutingModule {}
