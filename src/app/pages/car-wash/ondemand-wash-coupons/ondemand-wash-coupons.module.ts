import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndemandWashCouponsPageRoutingModule } from './ondemand-wash-coupons-routing.module';

import { OndemandWashCouponsPage } from './ondemand-wash-coupons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndemandWashCouponsPageRoutingModule
  ],
  declarations: [OndemandWashCouponsPage]
})
export class OndemandWashCouponsPageModule {}
