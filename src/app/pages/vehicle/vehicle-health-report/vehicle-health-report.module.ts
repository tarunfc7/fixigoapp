import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleHealthReportPageRoutingModule } from './vehicle-health-report-routing.module';

import { VehicleHealthReportPage } from './vehicle-health-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleHealthReportPageRoutingModule
  ],
  declarations: [VehicleHealthReportPage]
})
export class VehicleHealthReportPageModule {}
