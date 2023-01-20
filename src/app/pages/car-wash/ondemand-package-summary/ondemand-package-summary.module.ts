import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndemandPackageSummaryPageRoutingModule } from './ondemand-package-summary-routing.module';

import { OndemandPackageSummaryPage } from './ondemand-package-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndemandPackageSummaryPageRoutingModule
  ],
  declarations: [OndemandPackageSummaryPage]
})
export class OndemandPackageSummaryPageModule {}
