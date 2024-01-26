import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { FooterTabsComponent } from 'src/app/components/footer-tabs/footer-tabs.component';
import { FooterTabsModule } from 'src/app/components/footer-tabs/footer-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    FooterTabsModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
