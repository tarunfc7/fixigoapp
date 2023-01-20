import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.page.html',
  styleUrls: ['./vehicles-list.page.scss'],
})
export class VehiclesListPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  menu(){
    console.log("menu working");
  }

  public data = [{ title: 'Maruti Suzuki Alto 800',subtitle: 'DL C4 2848',
  vehicleBody: 'Hatchback', fuelType: 'Petrol', vehicleYear: '2019',vehicleColor: 'Red',
   imagePath: '../../../assets/images/vehicles/Maruti Suzuki Alto.png'},
   { title: 'Mahindra Scorpio',subtitle: 'DL C4 2848',
   vehicleBody: 'SUV', fuelType: 'Petrol', vehicleYear: '2017',vehicleColor: 'White',
    imagePath: '../../../assets/images/vehicles/Mahindra Scorpio.png'},
    { title: 'Tata Nano',subtitle: 'DL C4 2848',
    vehicleBody: 'Hatchback', fuelType: 'Petrol', vehicleYear: '2018',vehicleColor: 'Red',
     imagePath: '../../../assets/images/vehicles/Tata Nano.png'}];
  
  public vehicleResults = [...this.data];

  vehcileInformation(){
    this.navCtrl.navigateRoot('/vehicle-health-report');
  }


}
