import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreparingPageRoutingModule } from './preparing-routing.module';

import { PreparingPage } from './preparing.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreparingPageRoutingModule,
  ],
  declarations: [PreparingPage]
})
export class PreparingPageModule {}
