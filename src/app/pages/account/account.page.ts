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

  public data = [{title:'Notifications',page:'notifications'}, 
  {title:'Manage your vehicle',page:'tabs'},
   {title:'My Address',page:'address'}, 
   {title:'My Repair Quote',page:'repair-quote'},
   {title:'Wallet', page:'wallet'},
   {title:'Refer and earn', page:'refer-earn'},
   {title:'Contact Us', page:'contact'},
   {title:'FAQ',page:'faq'},];
  public results = [...this.data];

  // handleChange(event) {
  //   const query = event.target.value.toLowerCase();
  //   this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  // }

  logout(){
    this.navCtrl.navigateRoot('/login');
  }

  page(result:any){
    console.log("result",result);
    this.navCtrl.navigateRoot('/'+result);
  }

}
