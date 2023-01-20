import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ondemand-order-summary',
  templateUrl: './ondemand-order-summary.page.html',
  styleUrls: ['./ondemand-order-summary.page.scss'],
})
export class OndemandOrderSummaryPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  
  public trackdata = [{title:'Order Placed',imagePath: '../../../assets/images/car-wash/order-placed.svg',status: 'Completed'},
   {title:'Ninja on the way',imagePath: '../../../assets/images/car-wash/ninja_sel.svg',status: 'Completed'}, 
    {title:'Washing',imagePath: '../../../assets/images/car-wash/car-wash.svg',status: 'pending'},
    {title:'Completed',imagePath: '../../../assets/images/car-wash/completed-wash.svg',status: 'pending'} ];

  public trackresults = [...this.trackdata];

  trackDetails(){
    this.navCtrl.navigateRoot('/ondemand-order-tracking');
  }
}
