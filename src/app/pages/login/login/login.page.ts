import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formData: {
    mobile: number,
    terms: boolean
  } 
  = {
      mobile: 9123456780,
      terms: false
    };

  // eid_invalid: true;
  checkTerms: boolean = false;
  validMobile: boolean = false;

  @ViewChild('form', { static: false }) form: NgForm;

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  login(e: NgForm) {
    let mobile = String(e.value.mobile);
    if (e.invalid) return false;
    console.log("working",mobile);
    //this.navCtrl.navigateRoot('otp');
    if (!!mobile) {
      this.navCtrl.navigateRoot('/otp');
    }; 
  }

}
