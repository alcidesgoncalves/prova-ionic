import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private navCtrl: NavController,
    private closeWindow: MenuController
  ) {}

  navigateToPage(pageName: string) {
    if (pageName === 'pag1') {
      this.navCtrl.navigateForward('/pag1');
    } else {
      this.navCtrl.navigateForward('/pag2');
    }
  }
  close() {
    this.closeWindow.close();
  }
}
