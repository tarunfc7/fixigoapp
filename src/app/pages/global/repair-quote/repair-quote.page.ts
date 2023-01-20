import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-repair-quote',
  templateUrl: './repair-quote.page.html',
  styleUrls: ['./repair-quote.page.scss'],
})
export class RepairQuotePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  details(){
    this.navCtrl.navigateRoot('/repair-quote-summary');
  }
}
