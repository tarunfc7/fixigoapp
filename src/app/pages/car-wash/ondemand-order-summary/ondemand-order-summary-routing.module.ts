import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OndemandOrderSummaryPage } from './ondemand-order-summary.page';

const routes: Routes = [
  {
    path: '',
    component: OndemandOrderSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OndemandOrderSummaryPageRoutingModule {}
