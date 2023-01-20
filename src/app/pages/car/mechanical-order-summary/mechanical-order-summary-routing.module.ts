import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechanicalOrderSummaryPage } from './mechanical-order-summary.page';

const routes: Routes = [
  {
    path: '',
    component: MechanicalOrderSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechanicalOrderSummaryPageRoutingModule {}
