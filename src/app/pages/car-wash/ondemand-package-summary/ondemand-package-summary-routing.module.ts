import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OndemandPackageSummaryPage } from './ondemand-package-summary.page';

const routes: Routes = [
  {
    path: '',
    component: OndemandPackageSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OndemandPackageSummaryPageRoutingModule {}
