import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivedPageRoutingModule } from './received-routing.module';

import { ReceivedPage } from './received.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivedPageRoutingModule
  ],
  declarations: [ReceivedPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReceivedPageModule {}
