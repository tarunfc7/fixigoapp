import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.page.html',
  styleUrls: ['./select-car.page.scss'],
})
export class SelectCarPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  // public data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  public data = [{ title: 'Maruti Suzuki 800', imagePath: '../../../assets/images/cars/Maruti Suzuki 800.svg'},
  { title: 'Maruti Suzuki Alto', imagePath: '../../../assets/images/cars/Maruti Suzuki Alto.svg'},
  { title: 'Maruti Suzuki astar', imagePath: '../../../assets/images/cars/Maruti Suzuki astar.svg'},
  { title: 'Maruti Suzuki Baleno', imagePath: '../../../assets/images/cars/Maruti Suzuki Baleno.svg'},
  { title: 'Maruti Suzuki Brezza', imagePath: '../../../assets/images/cars/Maruti Suzuki Brezza.svg'},
  { title: 'Maruti Suzuki Celerio', imagePath: '../../../assets/images/cars/Maruti Suzuki Celerio.svg'},
  { title: 'Maruti Suzuki Ciaz', imagePath: '../../../assets/images/cars/Maruti Suzuki Ciaz.svg'},
  { title: 'Maruti Suzuki Dzire', imagePath: '../../../assets/images/cars/Maruti Suzuki Dzire.svg'},
  { title: 'Maruti Suzuki Ertiga', imagePath: '../../../assets/images/cars/Maruti Suzuki Ertiga.svg'},
  { title: 'Maruti Suzuki Gypsy', imagePath: '../../../assets/images/cars/Maruti Suzuki Gypsy.svg'},
  { title: 'Maruti Suzuki Ignis', imagePath: '../../../assets/images/cars/Maruti Suzuki Ignis.svg'},
  { title: 'Maruti Suzuki S Presso', imagePath: '../../../assets/images/cars/Maruti Suzuki S Presso.svg'},
  { title: 'Maruti Suzuki Swift', imagePath: '../../../assets/images/cars/Maruti Suzuki Swift.svg'},
  { title: 'Maruti Suzuki Wagon R', imagePath: '../../../assets/images/cars/Maruti Suzuki Wagon R.svg'},
  { title: 'Maruti Suzuki Zen Esteelo', imagePath: '../../../assets/images/cars/Maruti Suzuki Zen Esteelo.svg'}];
  
  public results = [...this.data];

  selectCar(item:any){
    this.navCtrl.navigateRoot('/tabs');
  }

}
