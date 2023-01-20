import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-service-book-message',
  templateUrl: './service-book-message.page.html',
  styleUrls: ['./service-book-message.page.scss'],
})
export class ServiceBookMessagePage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  home(){
    this.navCtrl.navigateRoot('/mechanical-order-summary');
  }

}
