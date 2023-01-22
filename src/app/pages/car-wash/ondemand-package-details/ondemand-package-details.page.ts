import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ondemand-package-details',
  templateUrl: './ondemand-package-details.page.html',
  styleUrls: ['./ondemand-package-details.page.scss'],
})
export class OndemandPackageDetailsPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  couponslideOpts = {
    slidesPerView: 2.25,
    speed: 400,
    spaceBetween: 0,
  };
  availwashslideOpts ={
    slidesPerView: 2.15,
    speed: 400,
    spaceBetween: 0,
  };

  availWashCoupons(){
    this.navCtrl.navigateRoot('/ondemand-wash-coupons');
  }

  orderTracking(){
    this.navCtrl.navigateRoot('/ondemand-order-tracking');
  }

}
