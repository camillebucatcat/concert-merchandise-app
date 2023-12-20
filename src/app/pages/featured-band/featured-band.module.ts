import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeaturedBandPageRoutingModule } from './featured-band-routing.module';

import { FeaturedBandPage } from './featured-band.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeaturedBandPageRoutingModule
  ],
  declarations: [FeaturedBandPage]
})
export class FeaturedBandPageModule {}
