import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {

  public loading: boolean = false;
  constructor(private navController: NavController,private location: Location,private loadingCtrl: LoadingController) { }
  
  back(){
    this.location.back();
  }
  async showLoading() {
    this.loading = true;
    const loading = await this.loadingCtrl.create({
      message: 'Processing...',
      duration: 2800,
      cssClass: 'loadingcss',
      spinner: null,
    })
    setTimeout(() =>{
      this.loading = false;
      this.navController.navigateRoot('/order-confirm')
    },3000);

    loading.present();
  }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  ngOnInit() {
  }

}
