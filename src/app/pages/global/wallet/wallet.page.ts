import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  public walletData = [{title:'Free exterior shine',validity: 'Validity : 25 Mar 2023',
  imagePath:'../../../assets/images/car-wash/Cleaning and Detailing.svg',status: 'Redeem'},
  {title:'Free exterior shine',validity: 'Validity : 25 Mar 2023',
  imagePath:'../../../assets/images/car-wash/Cleaning and Detailing.svg',status: 'expired'}, 
   {title:'Free exterior shine',validity: 'Validity : 25 Mar 2023',
   imagePath:'../../../assets/images/car-wash/Cleaning and Detailing.svg',status: 'expired'},
   {title:'Free exterior shine',validity: 'Validity : 25 Mar 2023',
   imagePath:'../../../assets/images/car-wash/Cleaning and Detailing.svg',status: 'expired'} ];
 
  public walletResults = [...this.walletData];

  details(){
    this.navCtrl.navigateRoot('/wallet-summary');
  }

}
