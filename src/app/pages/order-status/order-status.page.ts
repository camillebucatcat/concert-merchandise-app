import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.page.html',
  styleUrls: ['./order-status.page.scss'],
})
export class OrderStatusPage implements OnInit {

  constructor(private navController: NavController,private location: Location) { }
  back(){
    this.location.back();
  }

  ngOnInit() {
  }

}
