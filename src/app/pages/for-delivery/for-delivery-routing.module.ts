import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForDeliveryPage } from './for-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: ForDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForDeliveryPageRoutingModule {}
