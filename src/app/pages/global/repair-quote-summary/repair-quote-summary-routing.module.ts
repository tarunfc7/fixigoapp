import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepairQuoteSummaryPage } from './repair-quote-summary.page';

const routes: Routes = [
  {
    path: '',
    component: RepairQuoteSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepairQuoteSummaryPageRoutingModule {}
