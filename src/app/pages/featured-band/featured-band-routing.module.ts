import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturedBandPage } from './featured-band.page';

const routes: Routes = [
  {
    path: '',
    component: FeaturedBandPage,
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
