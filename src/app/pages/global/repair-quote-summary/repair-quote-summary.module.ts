import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepairQuoteSummaryPageRoutingModule } from './repair-quote-summary-routing.module';

import { RepairQuoteSummaryPage } from './repair-quote-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepairQuoteSummaryPageRoutingModule
  ],
  declarations: [RepairQuoteSummaryPage]
})
export class RepairQuoteSummaryPageModule {}
