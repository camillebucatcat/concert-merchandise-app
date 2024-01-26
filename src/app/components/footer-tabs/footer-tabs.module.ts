import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterTabsComponent } from './footer-tabs.component';



@NgModule({
  declarations: [FooterTabsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [FooterTabsComponent]
})
export class FooterTabsModule { }
