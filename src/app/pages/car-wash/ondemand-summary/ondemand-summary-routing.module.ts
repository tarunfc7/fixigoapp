import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OndemandSummaryPage } from './ondemand-summary.page';

const routes: Routes = [
  {
    path: '',
    component: OndemandSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OndemandSummaryPageRoutingModule {}
