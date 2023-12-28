import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForDeliveryPageRoutingModule } from './for-delivery-routing.module';

import { ForDeliveryPage } from './for-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForDeliveryPageRoutingModule
  ],
  declarations: [ForDeliveryPage]
})
export class ForDeliveryPageModule {}
