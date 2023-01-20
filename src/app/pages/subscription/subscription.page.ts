import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  ondemandpackage(){
    this.navCtrl.navigateRoot('/ondemand-package-details');
  }

  subscription(){
    this.navCtrl.navigateRoot('/subscription-list');
  }

}
