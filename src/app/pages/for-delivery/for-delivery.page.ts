import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Location } from "@angular/common";
@Component({
  selector: 'app-for-delivery',
  templateUrl: './for-delivery.page.html',
  styleUrls: ['./for-delivery.page.scss'],
})
export class ForDeliveryPage implements OnInit {

  constructor(private navController: NavController,private location: Location,private loadingCtrl: LoadingController) { }
  
  back(){
    this.location.back();
  }
  ngOnInit() {
  }

}
