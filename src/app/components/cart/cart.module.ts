import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{path: '', component: CartComponent}])
  ],
  exports: [CartComponent]
})
export class CartModule { }
