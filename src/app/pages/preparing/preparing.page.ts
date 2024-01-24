import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Location } from "@angular/common";
@Component({
  selector: 'app-preparing',
  templateUrl: './preparing.page.html',
  styleUrls: ['./preparing.page.scss'],
})
export class PreparingPage implements OnInit {

  constructor(private navController: NavController,private location: Location,private loadingCtrl: LoadingController) { }
  
  back(){
    this.location.back();
  }
  ngOnInit() {
  }

}
