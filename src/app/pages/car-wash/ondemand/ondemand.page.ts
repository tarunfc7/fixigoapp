import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ondemand',
  templateUrl: './ondemand.page.html',
  styleUrls: ['./ondemand.page.scss'],
})
export class OndemandPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  public data = [{title:'Exterior shine',amt: '₹249',imagePath: '../../../assets/images/car-wash/Body wash.svg'},
   {title:'Interior shine',amt: '₹249',imagePath: '../../../assets/images/car-wash/Cleaning and Detailing.svg'}, 
    {title:'Exterior and interior shine',amt: '₹249',imagePath: '../../../assets/images/car-wash/Covid wash.svg'},
    {title:'Exterior shine and engine detailing',amt: '₹249',imagePath: '../../../assets/images/car-wash/Engine.svg'},
    {title:'Ordor removal with interior shine',amt: '₹249',imagePath: '../../../assets/images/car-wash/interior cleaning.svg'},
    {title:'Covid killer wash',amt: '₹249',imagePath: '../../../assets/images/car-wash/interior disinfection.svg'} ];

  public results = [...this.data];

  public timeData = [{time: '06:30 AM', status: 'surge'},
  {time: '07:00 AM', status: 'nosurge'},
  {time: '07:30 AM', status: 'surge'},
  {time: '08:00 AM', status: 'nosurge'},
  {time: '08:30 AM', status: 'surge'},{time: '09:00 AM', status: 'nosurge'},
  {time: '09:30 AM', status: 'nosurge'},{time: '10:00 AM', status: 'surge'},
  {time: '10:30 AM', status: 'surge'},{time: '11:00 AM', status: 'nosurge'},
  {time: '11:30 AM', status: 'nosurge'},{time: '12:00 PM', status: 'surge'},
  {time: '12:30 PM', status: 'surge'},{time: '01:00 PM', status: 'nosurge'}]

  public timeResults = [...this.timeData];

  confirmation(){
    this.navCtrl.navigateRoot('/ondemand-summary');
  }

}
