import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent  implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Processing...',
      duration: 3000,
    });

    loading.present();
  }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  ngOnInit() {}

}
