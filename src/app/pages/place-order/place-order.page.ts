import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {

  constructor(private navController: NavController,private location: Location) { }
  
  back(){
    this.location.back();
  }

  ngOnInit() {
  }

}
