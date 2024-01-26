import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { FooterTabsComponent } from './components/footer-tabs/footer-tabs.component';
import { FooterTabsModule } from './components/footer-tabs/footer-tabs.module';
@NgModule({
  declarations: [AppComponent,
  BottomSheetComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FooterTabsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
