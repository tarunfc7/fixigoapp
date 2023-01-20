import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndemandPackageOrderPageRoutingModule } from './ondemand-package-order-routing.module';

import { OndemandPackageOrderPage } from './ondemand-package-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndemandPackageOrderPageRoutingModule
  ],
  declarations: [OndemandPackageOrderPage]
})
export class OndemandPackageOrderPageModule {}
