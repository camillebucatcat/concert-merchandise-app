import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { FooterTabsComponent } from 'src/app/components/footer-tabs/footer-tabs.component';
import { FooterTabsModule } from 'src/app/components/footer-tabs/footer-tabs.module';
import { TabsPageModule } from 'src/app/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    FormsModule,
    FooterTabsModule,
    TabsPageModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
