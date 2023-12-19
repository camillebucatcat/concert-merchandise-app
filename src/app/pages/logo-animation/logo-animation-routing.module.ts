import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoAnimationPage } from './logo-animation.page';

const routes: Routes = [
  {
    path: '',
    component: LogoAnimationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoAnimationPageRoutingModule {}
