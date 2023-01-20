import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndemandOrderSummaryPageRoutingModule } from './ondemand-order-summary-routing.module';

import { OndemandOrderSummaryPage } from './ondemand-order-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndemandOrderSummaryPageRoutingModule
  ],
  declarations: [OndemandOrderSummaryPage]
})
export class OndemandOrderSummaryPageModule {}
