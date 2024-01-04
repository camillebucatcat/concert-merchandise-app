import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { RemoveItemsComponent } from 'src/app/components/remove-items/remove-items.component';
import { Location } from "@angular/common";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(public popoverController: PopoverController, private modalCtrl: ModalController,private location: Location) { }
  back(){
    this.location.back();
  }
  // @ViewChild('popover') popover;

  // isOpen = false;

  // presentPopover(e: Event) {
  //   this.popover.event = e;
  //   this.isOpen = true;
  // }
  async remove() {
    const modal = await this.modalCtrl.create({
      component: RemoveItemsComponent,
      cssClass: "sheet-modal"
    });
    modal.present();
  }
  ngOnInit() {
  }

}
