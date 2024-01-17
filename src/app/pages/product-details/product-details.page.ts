import { Component, Input, OnInit } from '@angular/core';
import { BottomSheetComponent } from 'src/app/components/bottom-sheet/bottom-sheet.component';
import { ModalController, NavController } from '@ionic/angular';
import { Location } from "@angular/common";
import { NgxsReadMoreModule, ReadMoreOptions } from '@minni/read-more';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(private modalCtrl: ModalController,private location: Location) { }
  back(){
    this.location.back();
  }
  // BottomSheet = false;
  
  // setOpen(isOpen: boolean) {
  //   this.BottomSheet = isOpen;
  // }
  async sheet() {
    const modal = await this.modalCtrl.create({
      component: BottomSheetComponent,
      cssClass: "sheet-modal"
    });
    modal.present();
  }
  @Input () isReadMore: boolean = false;
  public isCollapsed: boolean = true;
  
  readMoreOption: ReadMoreOptions = {
    readLessText: 'less',
    readMoreText: 'more', 
    styles: {             
      color: "#DF2E38",
    },
    classes: ['custom-style', 'blog-style']
  }
  public isVisited = true;
public checkVisited() {
   // reverse the value of property
   this.isVisited = this.isVisited;
}
  ngOnInit() {
  }
  
}
