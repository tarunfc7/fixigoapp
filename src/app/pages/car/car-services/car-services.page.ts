import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-car-services',
  templateUrl: './car-services.page.html',
  styleUrls: ['./car-services.page.scss'],
})
export class CarServicesPage implements OnInit {

  constructor(private navCtrl: NavController, public modal: ModalController) { }

  ngOnInit() {
  }

  trendingslideOpts = {
    slidesPerView: 2.15,
    speed: 400,
    spaceBetween: 0,
  };

  brandServiceslideOpts = {
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 10,
  };

  brandImageslideOpts = {
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 10,
  };

  public serviceListData = [{ title: 'Basic service',Amount: '2000',
  description: 'Every 5,000 kms or 3 month, 3 hours of service', memberDesc: 'You just saved ₹1400 as a gold member', 
   imagePath: '../../../assets/images/services/Periodic_service_details.png'},
   { title: 'Standard service',Amount: '2799',
   description: 'Improve car performance', memberDesc: 'You just saved ₹1800 as a gold member', 
    imagePath: '../../../assets/images/services/Standard_service.png'},
    { title: 'Comprehensive service',Amount: '4099',description: 'Every 20,000 kms or 12 month, 6 hours of service', 
      memberDesc: 'You just saved ₹2500 as a gold member', 
     imagePath: '../../../assets/images/services/Comprehensive_service.png'}];
  
  public serviceListResults = [...this.serviceListData];

  public additionalserviceListData = [{ title: 'Brake drums turning',Amount: '799',
  description: 'Brake drums turning', memberDesc: 'You just saved ₹500 as a gold member', 
   imagePath: '../../../assets/images/services/brake_drum_turning_service.png'},
   { title: 'Disk turning',Amount: '599',
   description: 'Include: Opening & fitting + Inspection of below items. resurfacing of brake disce /rotors. Applicable for set of 2 discs', 
   memberDesc: 'You just saved ₹400 as a gold member', 
    imagePath: '../../../assets/images/services/disk_turning_service.png'}];
  
  public additionalserviceListResults = [...this.additionalserviceListData];

  addtoCart(){
    this.modal.dismiss();
    this.navCtrl.navigateRoot('/service-order-confirmation');
  };


}
