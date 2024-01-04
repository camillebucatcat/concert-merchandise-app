import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
@Component({
  selector: 'app-featured-band',
  templateUrl: './featured-band.page.html',
  styleUrls: ['./featured-band.page.scss'],
})
export class FeaturedBandPage implements OnInit {
  
  type = 'tshirt';

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
