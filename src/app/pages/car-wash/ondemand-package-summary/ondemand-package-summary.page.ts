import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ondemand-package-summary',
  templateUrl: './ondemand-package-summary.page.html',
  styleUrls: ['./ondemand-package-summary.page.scss'],
})
export class OndemandPackageSummaryPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  payNow(){
    this.navCtrl.navigateRoot('/ondemand-package-order');
  }

}
