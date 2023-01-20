import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndemandSummaryPageRoutingModule } from './ondemand-summary-routing.module';

import { OndemandSummaryPage } from './ondemand-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndemandSummaryPageRoutingModule
  ],
  declarations: [OndemandSummaryPage]
})
export class OndemandSummaryPageModule {}
