import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonInput, NavController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  checkTerms: boolean = false;
  validOTP: boolean = false;

  @ViewChild('form', { static: false }) form: NgForm;
  @ViewChild('pin', { static: false }) pin: IonInput;
  formData = {
    pin: null,
    pin_error: false,
  };

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  ionViewDidEnter() {   
    this.pin.setFocus();
  }

  blur(input: IonInput, form: NgForm) {
    input.value = (input.value as string).substr(0, 4);
    if (input.value.length >= 4)
      input.getInputElement().then(((data) => {
        data.blur();
        this.form.ngSubmit.emit();
      }))
  }

  submit(e: NgForm) {
    // let otp = String(e.value.otp);
    // if (e.invalid) return false;

    let pin = e.value.pin.toString();
    if (e.invalid || pin.length != 4) return this.formData.pin_error = true;    
    console.log("OTP working",pin);
    this.formData.pin_error = false;
    if (!!pin) {
      this.navCtrl.navigateRoot('/select-city');
    }; 
  }

  change(){
    this.navCtrl.navigateRoot('/login');
  }

}
