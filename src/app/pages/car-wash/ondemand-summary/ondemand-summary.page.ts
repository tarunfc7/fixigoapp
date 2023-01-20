import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ondemand-summary',
  templateUrl: './ondemand-summary.page.html',
  styleUrls: ['./ondemand-summary.page.scss'],
})
export class OndemandSummaryPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  orderSummary(){
    this.navCtrl.navigateRoot('/ondemand-order-summary');
  }

}
