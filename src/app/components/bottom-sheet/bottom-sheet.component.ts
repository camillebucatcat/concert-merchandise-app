import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent  implements OnInit {
  noDisplay = false;
  constructor(public modalController:ModalController) { }
  nodisplay(data:boolean){
    this.noDisplay = true;
    this.modalController.dismiss({
    });
  }

  ngOnInit() {}

}
