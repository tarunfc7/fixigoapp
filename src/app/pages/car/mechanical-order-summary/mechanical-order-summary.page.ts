import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mechanical-order-summary',
  templateUrl: './mechanical-order-summary.page.html',
  styleUrls: ['./mechanical-order-summary.page.scss'],
})
export class MechanicalOrderSummaryPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  public trackdata = [{title:'Order Placed',imagePath: '../../../assets/images/car-wash/order-placed.svg',status: 'Completed'},
   {title:'Picked up',imagePath: '../../../assets/images/car-wash/002-key_sell.svg',status: 'Completed'}, 
    {title:'Servicing',imagePath: '../../../assets/images/car-wash/003-repair-tool.svg',status: 'pending'},
    {title:'Delivered',imagePath: '../../../assets/images/car-wash/004-car-rental.svg',status: 'pending'} ];

  public trackresults = [...this.trackdata];

  cancel(){
    this.navCtrl.navigateRoot('/tabs');
  }
}
