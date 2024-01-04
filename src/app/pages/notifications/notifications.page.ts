import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  type = 'delivery';
  constructor(private location: Location) { }
  back(){
    this.location.back();
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ngOnInit() {
  }

}
