import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {


  constructor(private navCtrl: NavController,public modal: ModalController) { }

  ngOnInit() {
  }

  type = 'repair';

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
  }

  repairdetails(){
    this.navCtrl.navigateRoot('/mechanical-order-summary');
  }

  ondemanddetails(){
    this.navCtrl.navigateRoot('/ondemand-order-summary');
  }

}
