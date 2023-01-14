import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-brand',
  templateUrl: './select-brand.page.html',
  styleUrls: ['./select-brand.page.scss'],
})
export class SelectBrandPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  // public data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  public data = [{ title: 'Audi', imagePath: '../../../assets/images/brands/audi.svg'},
  { title: 'Maruti Suzuki', imagePath: '../../../assets/images/brands/suzuki.svg'},
  { title: 'Tata', imagePath: '../../../assets/images/brands/tata.svg'},
  { title: 'Toyota', imagePath: '../../../assets/images/brands/toyota.svg'},
  { title: 'Hyundai', imagePath: '../../../assets/images/brands/hyundai.svg'},
  { title: 'Mercedes benz', imagePath: '../../../assets/images/brands/benz.svg'},
  { title: 'Nissan', imagePath: '../../../assets/images/brands/nissan.svg'},
  { title: 'Volkswagen', imagePath: '../../../assets/images/brands/volkswagen.svg'},
  { title: 'BMW', imagePath: '../../../assets/images/brands/bmw.svg'},
  { title: 'Chevrolet', imagePath: '../../../assets/images/brands/chevrolet.svg'},
  { title: 'Skoda', imagePath: '../../../assets/images/brands/skoda.svg'},
  { title: 'Force', imagePath: '../../../assets/images/brands/force.svg'},
  { title: 'Mahindra', imagePath: '../../../assets/images/brands/mahindra.svg'},
  { title: 'MG', imagePath: '../../../assets/images/brands/mg.svg'},
  { title: 'Renault', imagePath: '../../../assets/images/brands/renault.svg'}];
  
  public results = [...this.data];

  selectBrand(item:any){
    this.navCtrl.navigateRoot('/select-car');
  }

}
