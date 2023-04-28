import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {
  constructor(private navCtrl: NavController) {}
  navigateToPage(pageName: string) {
    if (pageName === 'home') {
      this.navCtrl.navigateBack('home');
    }
  }
  ngOnInit() {}
}
