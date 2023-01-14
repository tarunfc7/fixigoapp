import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.page.html',
  styleUrls: ['./select-city.page.scss'],
})
export class SelectCityPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  public data = [{ title: 'Delhi', imagePath: '../../../assets/images/cities/delhi_usel.png'},
  { title: 'Noida', imagePath: '../../../assets/images/cities/noida_usel.png'},
  { title: 'Greater Noida', imagePath: '../../../assets/images/cities/greater_noida_usel.png'},
  { title: 'Ghaziabad', imagePath: '../../../assets/images/cities/ghaziabad_usel.png'},
  { title: 'Gurugram', imagePath: '../../../assets/images/cities/gurugram_usel.png'},
  { title: 'Chandigarh', imagePath: '../../../assets/images/cities/chandigarh__usel.png'},
  { title: 'Mohali', imagePath: '../../../assets/images/cities/mohali_usel.png'},
  { title: 'Panchkula', imagePath: '../../../assets/images/cities/panchkula_usel.png'},
  { title: 'Ambala', imagePath: '../../../assets/images/cities/ambala__usel.png'},
  { title: 'Ludhiana', imagePath: '../../../assets/images/cities/ludhiana_usel.png'}];
  public results = [...this.data];

  selectCity(item:any){
    console.log("city item",item);
    if (!!item){
      item.imagePath = '../../../assets/images/cities/'+item.title.toLowerCase() +'_sel.png';
      this.navCtrl.navigateRoot('/select-brand');
    };

  }

}
