import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceOrderConfirmationPageRoutingModule } from './service-order-confirmation-routing.module';

import { ServiceOrderConfirmationPage } from './service-order-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceOrderConfirmationPageRoutingModule
  ],
  declarations: [ServiceOrderConfirmationPage]
})
export class ServiceOrderConfirmationPageModule {}
