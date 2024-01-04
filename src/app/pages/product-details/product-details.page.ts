import { Component, OnInit } from '@angular/core';
import { BottomSheetComponent } from 'src/app/components/bottom-sheet/bottom-sheet.component';
import { ModalController, NavController } from '@ionic/angular';
import { Location } from "@angular/common";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(private modalCtrl: ModalController,private location: Location) { }
  back(){
    this.location.back();
  }
  // BottomSheet = false;
  
  // setOpen(isOpen: boolean) {
  //   this.BottomSheet = isOpen;
  // }
  async sheet() {
    const modal = await this.modalCtrl.create({
      component: BottomSheetComponent,
      cssClass: "sheet-modal"
    });
    modal.present();
  }
  
  ngOnInit() {
  }
  
}
