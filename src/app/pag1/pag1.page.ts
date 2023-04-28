import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})
export class Pag1Page implements OnInit {
  constructor(private navCtrl: NavController) {}
  navigateToPage(pageName: string) {
    if (pageName === 'home') {
      this.navCtrl.navigateBack('home');
    }
  }
  ngOnInit() {}
}
