import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleHealthReportPage } from './vehicle-health-report.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleHealthReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleHealthReportPageRoutingModule {}
