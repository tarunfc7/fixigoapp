import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController,public modal: ModalController) { }

  ngOnInit() {
  }

  slideOpts = {
    slidesPerView: 2,
    speed: 400,
    spaceBetween: 0,
  };

  trendingslideOpts = {
    slidesPerView: 2.15,
    speed: 400,
    spaceBetween: 0,
  };

  reviewslideOpts = {
    slidesPerView: 1.15,
    speed: 400,
    spaceBetween: 0,
  };

  couponSlides = {
    slidesPerView: 1.15,
    speed: 400,
    spaceBetween: 0,
  };

  

  public data = [{ title: 'Periodic service', imagePath: '../../../assets/images/services/Periodic Services.png'},
  { title: 'Battery Services', imagePath: '../../../assets/images/services/Batteries.png'},
  { title: 'AC service', imagePath: '../../../assets/images/services/Car AC.png'},
  { title: 'Tyre services', imagePath: '../../../assets/images/services/Wheel Care Services.png'},
  { title: 'Car detailing', imagePath: '../../../assets/images/services/Cleaning and Detailing.png'},
  { title: 'Denting & Painting', imagePath: '../../../assets/images/services/Denting and Painting.png'}];
  
  public results = [...this.data];

  public signItemData = [{ title: 'Why is my car not starting?',
  subTitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu ultrices nunc, vel tempus tellus.',
  color:'#97E9D9',
   imagePath: '../../../assets/images/call request/callrequest1.png'},
   { title: 'Why is my car not starting?',
   subTitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu ultrices nunc, vel tempus tellus.',
   color:'#DBFAAC',
    imagePath: '../../../assets/images/call request/callrequest2.png'},
    { title: 'Why is my car not starting?',
    subTitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu ultrices nunc, vel tempus tellus.',
    color:'#DEB9F7',
     imagePath: '../../../assets/images/call request/callrequest1.png'},
     { title: 'Why is my car not starting?',
     subTitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu ultrices nunc, vel tempus tellus.',
     color:'#FFC7C7',
      imagePath: '../../../assets/images/call request/callrequest2.png'},
      { title: 'Why is my car not starting?',
      subTitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu ultrices nunc, vel tempus tellus.',
      color:'#FEF2A0',
       imagePath: '../../../assets/images/call request/callrequest1.png'}];
  
  public signItemResults = [...this.signItemData];

  manageVehicle(){
    this.modal.dismiss();
    this.navCtrl.navigateRoot('/vehicles-list');
  }

  viewService(){
    this.navCtrl.navigateRoot('/car-services');
  }

  ondemand(){
    this.navCtrl.navigateRoot('/ondemand');
  }

  ondemandpackage(){
    this.navCtrl.navigateRoot('/ondemand-package');
  }
  reviews(){
    this.navCtrl.navigateRoot('/reviews');
  }
  
  
//   <ion-slide>
//   <ion-grid class="signsItem">
//     <ion-row>
//       <ion-col size="12">
//         <div class="d-flex ion-padding signsItemCard">
//           <h4 class="ion-no-margin">Why is my car not starting?</h4>
//           <p class="ion-no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu ultrices nunc, vel tempus tellus.</p>
//           <img src="../../../assets/images/call request/callrequest1.png" alt="request a call"/>
//           <ion-button shape="round" size="default" color="primary">Request to call</ion-button>
//         </div>
//       </ion-col>
//     </ion-row>
//   </ion-grid>
// </ion-slide>

}
