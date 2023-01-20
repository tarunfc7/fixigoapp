import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-repair-quote-summary',
  templateUrl: './repair-quote-summary.page.html',
  styleUrls: ['./repair-quote-summary.page.scss'],
})
export class RepairQuoteSummaryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  
  public approvalData = [{title:'Clutch Service',desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',Price: '₹850',
  imagePath:'../../../assets/images/services/disk_turning_service.png',status: 'Completed'},
  {title:'Headlight cleaning',desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',Price: '₹850',
  imagePath:'../../../assets/images/services/brake_drum_turning_service.png',status: 'pending'}, 
  {title:'Clutch bearing',desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',Price: '₹850',
  imagePath:'../../../assets/images/services/Comprehensive_service.png',status: 'pending'},
  {title:'Air Filter',desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',Price: '₹850',
  imagePath:'../../../assets/images/services/Standard_service.png',status: 'pending'} ];

  public approvalResults = [...this.approvalData];

  details(){
    this.navCtrl.navigateRoot('/repair-quote');
  }

}
