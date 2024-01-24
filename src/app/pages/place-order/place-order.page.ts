import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {

  constructor(private navController: NavController,private location: Location,private loadingCtrl: LoadingController) { }
  
  back(){
    this.location.back();
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Processing...',
      duration: 30000,
      cssClass: 'loadingcss',
      spinner: 'crescent',
    });

    loading.present();
  }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  ngOnInit() {
  }

}
