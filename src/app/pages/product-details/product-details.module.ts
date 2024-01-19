import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPageRoutingModule } from './product-details-routing.module';

import { ProductDetailsPage } from './product-details.page';
import { NgxsReadMoreModule } from '@minni/read-more';
import { BottomSheetComponent } from 'src/app/components/bottom-sheet/bottom-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsPageRoutingModule,
    NgxsReadMoreModule
  ],
  declarations: [ProductDetailsPage],
  exports: [
    // BottomSheetComponent,
  ]
})
export class ProductDetailsPageModule {}
