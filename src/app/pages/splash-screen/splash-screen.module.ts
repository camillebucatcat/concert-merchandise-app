import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';
import { IonicModule } from '@ionic/angular';

import { SplashScreenPageRoutingModule } from './splash-screen-routing.module';

import { SplashScreenPage } from './splash-screen.page';

// register Swiper custom elements
register();
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashScreenPageRoutingModule,
  ],
  declarations: [SplashScreenPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SplashScreenPageModule {}
