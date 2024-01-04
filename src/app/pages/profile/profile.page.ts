import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private navController: NavController,private location: Location) { }
  back(){
    this.location.back();
  }
  ngOnInit() {
  }

}
