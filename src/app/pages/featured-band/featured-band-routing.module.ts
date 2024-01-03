import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturedBandPage } from './featured-band.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: FeaturedBandPage,
    children: [
      {
        path: 'tshirt',
        children: [
          {
            path: '',
            loadChildren: () => import('../tshirt/tshirt.module').then( m => m.TshirtPageModule)
          }
        ]
      },
      {
        path: 'caps',
        children: [
          {
            path: '',
            loadChildren: () => import('../caps/caps.module').then( m => m.CapsPageModule)
          }
        ]
      },
      {
        path: 'stickers',
        children: [
          {
            path: '',
            loadChildren: () => import('../stickers/stickers.module').then( m => m.StickersPageModule)
          }
        ]
      },
      {
        path: 'keychain',
        children: [
          {
            path: '',
            loadChildren: () => import('../keychain/keychain.module').then( m => m.KeychainPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/tshirt',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tshirt',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturedBandPageRoutingModule {}
