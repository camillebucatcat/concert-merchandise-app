import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { RemoveItemsComponent } from 'src/app/components/remove-items/remove-items.component';
import { Location } from "@angular/common";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent  implements OnInit {

  constructor(public popoverController: PopoverController, private modalCtrl: ModalController,private location: Location) { }

  back(){
    this.location.back();
  }
  async remove() {
    const modal = await this.modalCtrl.create({
      component: RemoveItemsComponent,
      cssClass: "sheet-modal"
    });
    modal.present();
  }
  ngOnInit() {}

}
