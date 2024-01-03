import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-band',
  templateUrl: './featured-band.page.html',
  styleUrls: ['./featured-band.page.scss'],
})
export class FeaturedBandPage implements OnInit {
  
  type = 'tshirt';

  constructor() { }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ngOnInit() {
  }

}
