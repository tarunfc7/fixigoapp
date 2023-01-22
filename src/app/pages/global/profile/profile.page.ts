import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private navCtrl: NavController,public modal: ModalController) { }

  ngOnInit() {
  }

  selectedCar(){
    this.modal.dismiss();
  }

  logout(){
    this.navCtrl.navigateRoot('/login');
  }

}
