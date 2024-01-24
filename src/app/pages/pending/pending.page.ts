import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Location } from "@angular/common";
@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit {

  constructor(private navController: NavController,private location: Location,private loadingCtrl: LoadingController) { }
  
  back(){
    this.location.back();
  }
  ngOnInit() {
  }

}
