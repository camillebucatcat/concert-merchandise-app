import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoAnimationPageRoutingModule } from './logo-animation-routing.module';

import { LogoAnimationPage } from './logo-animation.page';
import { LottiePlayer } from '@lottiefiles/lottie-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoAnimationPageRoutingModule,
  ],
  declarations: [LogoAnimationPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogoAnimationPageModule {}
