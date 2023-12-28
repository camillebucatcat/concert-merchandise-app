import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreparingPage } from './preparing.page';

const routes: Routes = [
  {
    path: '',
    component: PreparingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreparingPageRoutingModule {}
