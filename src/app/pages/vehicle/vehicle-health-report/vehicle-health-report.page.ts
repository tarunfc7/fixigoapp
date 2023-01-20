import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-health-report',
  templateUrl: './vehicle-health-report.page.html',
  styleUrls: ['./vehicle-health-report.page.scss'],
})
export class VehicleHealthReportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public data = [{ title: 'Periodic Service',imagePath: '../../../assets/images/vehicles/prodic_service.png'},
  { title: 'Engine',imagePath: '../../../assets/images/vehicles/car_engine.png'},
  { title: 'Brakes & Wheels',imagePath: '../../../assets/images/vehicles/car_brake.png'},
  { title: 'Clutch & Transmission',imagePath: '../../../assets/images/vehicles/car_gear.png'},
  { title: 'AC & Heater',imagePath: '../../../assets/images/vehicles/car_airconditioner.png'},
  { title: 'Steering & Suspension',imagePath: '../../../assets/images/vehicles/steering_wheel.png'},
  { title: 'Electrical',imagePath: '../../../assets/images/vehicles/electric_car.png'},
  { title: 'Exterior & Interior ',imagePath: '../../../assets/images/vehicles/car_wash.png'}
  ];
  public results = [...this.data];

  trendingslideOpts = {
    slidesPerView: 2.15,
    speed: 400,
    spaceBetween: 0,
  };

  public documentInfoData = [{ title: 'Registration certificate',carModel: 'Alto 800', plateNo: 'DL X4 XX58',validity: '15 Jan 2035',
  imagePath: '../../../assets/images/vehicles/rc.png'},
  { title: 'Insurance certificate',carModel: 'HDFC', plateNo: '454542556156454',validity: '25 Mar 2023',
  imagePath: '../../../assets/images/vehicles/insurance.png'},
  { title: 'PUC certificate',carModel: '655426558854', validity: '25 Mar 2023',
  imagePath: '../../../assets/images/vehicles/PUCC CERTIFI.png'}
  ];
  public documentInforesults = [...this.documentInfoData];

  segment = "healthReport";

  segmentChanged(ev: any) {
    // Add your logic here
    console.log("segment value",ev.detail.value);
    this.segment = ev.detail.value;
  }
}
