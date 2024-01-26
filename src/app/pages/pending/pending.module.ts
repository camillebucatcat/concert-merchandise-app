import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingPageRoutingModule } from './pending-routing.module';

import { PendingPage } from './pending.page';
import { FooterTabsModule } from 'src/app/components/footer-tabs/footer-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingPageRoutingModule,
    FooterTabsModule
  ],
  declarations: [PendingPage]
})
export class PendingPageModule {}
