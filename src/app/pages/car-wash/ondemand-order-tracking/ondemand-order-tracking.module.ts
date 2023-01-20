import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndemandOrderTrackingPageRoutingModule } from './ondemand-order-tracking-routing.module';

import { OndemandOrderTrackingPage } from './ondemand-order-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndemandOrderTrackingPageRoutingModule
  ],
  declarations: [OndemandOrderTrackingPage]
})
export class OndemandOrderTrackingPageModule {}
