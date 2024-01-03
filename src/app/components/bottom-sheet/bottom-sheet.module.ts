import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BottomSheetComponent } from './bottom-sheet.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BottomSheetComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BottomSheetModule { }
