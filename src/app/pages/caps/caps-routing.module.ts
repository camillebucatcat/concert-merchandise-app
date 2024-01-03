import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapsPage } from './caps.page';

const routes: Routes = [
  {
    path: '',
    component: CapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapsPageRoutingModule {}
