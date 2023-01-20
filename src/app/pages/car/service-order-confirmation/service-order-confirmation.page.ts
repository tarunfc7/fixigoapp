import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-service-order-confirmation',
  templateUrl: './service-order-confirmation.page.html',
  styleUrls: ['./service-order-confirmation.page.scss'],
})
export class ServiceOrderConfirmationPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  public serviceListData = [{ title: 'Basic service',Amount: '2999',
  description: 'Mobil semi synthetic 5w-50', imagePath: '../../../assets/images/services/order_ac_service.svg'},
   { title: 'Basic AC service',Amount: '1999',description: 'abcd', imagePath: '../../../assets/images/services/order_ac_service.svg'}];
  
  public serviceListResults = [...this.serviceListData];

  payNow(){
    this.navCtrl.navigateRoot('/service-book-message');
  }
}
