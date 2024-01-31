import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('tabs', { static: true })
  tabs!: IonTabs;
  public fillColor = "red"

  constructor(private router: Router) { }

  ngOnInit() {
  }
  page(page: string,event : any){
    this.fillColor = page=="home"?"red" : "white"
    this.tabs.select(page)
  }

}
