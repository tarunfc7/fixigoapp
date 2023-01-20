import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MechanicalOrderSummaryPageRoutingModule } from './mechanical-order-summary-routing.module';

import { MechanicalOrderSummaryPage } from './mechanical-order-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechanicalOrderSummaryPageRoutingModule
  ],
  declarations: [MechanicalOrderSummaryPage]
})
export class MechanicalOrderSummaryPageModule {}
