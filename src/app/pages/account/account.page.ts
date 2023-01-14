import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  public data = ['Notifications', 'Manage your vehicle', 'My Address', 'My Repair Quote', 'Wallet', 'Refer and earn', 'Contact Us', 'FAQ'];
  public results = [...this.data];

  // handleChange(event) {
  //   const query = event.target.value.toLowerCase();
  //   this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  // }

  logout(){
    this.navCtrl.navigateRoot('/login');
  }

}
