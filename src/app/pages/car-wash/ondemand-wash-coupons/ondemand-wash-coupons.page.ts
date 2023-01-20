import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ondemand-wash-coupons',
  templateUrl: './ondemand-wash-coupons.page.html',
  styleUrls: ['./ondemand-wash-coupons.page.scss'],
})
export class OndemandWashCouponsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public availSummaryData = [{address:'H-167, H Block, Sector 63, Noida, UP....',validity: '26/05/2022',
  imagePath:'../../../../assets/images/car-wash/availed_wash1.png',Price: '100',status: 'validity'},
 {address:'H-167, H Block, Sector 63, Noida, UP....',validity: '26/05/2022',
 imagePath:'../../../../assets/images/car-wash/availed_wash2.png',Price: '100',status: 'expired'}, 
  {address:'H-167, H Block, Sector 63, Noida, UP....',validity: '26/05/2022',
  imagePath:'../../../../assets/images/car-wash/availed_wash1.png',Price: '200',status: 'expired'},
  {address:'H-167, H Block, Sector 63, Noida, UP....',validity: '26/05/2022',
  imagePath:'../../../../assets/images/car-wash/availed_wash2.png',Price: '100',status: 'validity'},
  {address:'H-167, H Block, Sector 63, Noida, UP....',validity: '26/05/2022',
  imagePath:'../../../../assets/images/car-wash/availed_wash1.png',Price: '200',status: 'expired'},
  {address:'H-167, H Block, Sector 63, Noida, UP....',validity: '26/05/2022',
  imagePath:'../../../../assets/images/car-wash/availed_wash2.png',Price: '100',status: 'validity'} ];

public availSummaryResults = [...this.availSummaryData];

}
