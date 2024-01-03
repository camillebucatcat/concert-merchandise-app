import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeychainPage } from './keychain.page';

const routes: Routes = [
  {
    path: '',
    component: KeychainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeychainPageRoutingModule {}
