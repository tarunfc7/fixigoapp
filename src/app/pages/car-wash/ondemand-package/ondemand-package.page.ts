import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ondemand-package',
  templateUrl: './ondemand-package.page.html',
  styleUrls: ['./ondemand-package.page.scss'],
})
export class OndemandPackagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  
 public packageData = [{title:'Exterior shine and interior shine',desc:'1 Months validity',validity: 'Save %15 (52 save)',currentPrice: '₹149',Price: '₹250',
 imagePath:'../../../assets/images/car-wash/Component 37 – 2.svg',status: 'Completed'},
 {title:'Exterior shine and interior shine',desc:'3 Months validity',validity: 'Save %15 (52 save)',currentPrice: '₹249',Price: '₹350',
 imagePath:'../../../assets/images/car-wash/Component 38 – 1.svg',status: 'pending'}, 
  {title:'Exterior shine and interior shine ',desc:'6 Months validity',validity: 'Save %15 (52 save)',currentPrice: '₹249',Price: '₹350',
  imagePath:'../../../assets/images/car-wash/Component 39 – 1.svg',status: 'pending'}];

  public packageResults = [...this.packageData];

  
  packageSummary(){
    this.navCtrl.navigateRoot('/ondemand-package-summary');
  }

}
