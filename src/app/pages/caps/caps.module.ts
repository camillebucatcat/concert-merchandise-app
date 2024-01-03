import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapsPageRoutingModule } from './caps-routing.module';

import { CapsPage } from './caps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapsPageRoutingModule
  ],
  declarations: [CapsPage]
})
export class CapsPageModule {}
