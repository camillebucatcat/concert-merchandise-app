import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Location } from "@angular/common";
@Component({
  selector: 'app-received',
  templateUrl: './received.page.html',
  styleUrls: ['./received.page.scss'],
})
export class ReceivedPage implements OnInit {

  constructor(private navController: NavController,private location: Location,private loadingCtrl: LoadingController) { }
  
  back(){
    this.location.back();
  }
  ngOnInit() {
  }

}
