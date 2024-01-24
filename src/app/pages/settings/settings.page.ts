import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private navController: NavController,private location: Location) { }
  back(){
    this.location.back();
  }
  ngOnInit() {
  }

}
