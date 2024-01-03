import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeychainPageRoutingModule } from './keychain-routing.module';

import { KeychainPage } from './keychain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeychainPageRoutingModule
  ],
  declarations: [KeychainPage]
})
export class KeychainPageModule {}
