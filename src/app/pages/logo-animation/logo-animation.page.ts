import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-logo-animation',
  templateUrl: './logo-animation.page.html',
  styleUrls: ['./logo-animation.page.scss'],
})
export class LogoAnimationPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }
  navigateForward() {
    this.navController.setDirection('forward');
    this.router.navigate(['/home']);
}
ionViewWillEnter(){
  setTimeout(() => {
    this.navController.navigateForward(['/splash-screen'])
  }, 5500);
}
  ngOnInit() {
  }

}
