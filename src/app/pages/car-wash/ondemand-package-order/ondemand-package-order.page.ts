import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ondemand-package-order',
  templateUrl: './ondemand-package-order.page.html',
  styleUrls: ['./ondemand-package-order.page.scss'],
})
export class OndemandPackageOrderPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  public trackdata = [{title:'Order Placed',imagePath: '../../../assets/images/car-wash/order-placed.svg',status: 'Completed'},
  {title:'Ninja on the way',imagePath: '../../../assets/images/car-wash/ninja_sel.svg',status: 'Completed'}, 
   {title:'Washing',imagePath: '../../../assets/images/car-wash/car-wash.svg',status: 'pending'},
   {title:'Completed',imagePath: '../../../assets/images/car-wash/completed-wash.svg',status: 'pending'} ];

 public trackresults = [...this.trackdata];

 home(){
  this.navCtrl.navigateRoot('/tabs');
 }

}
