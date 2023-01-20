import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OndemandPackageDetailsPage } from './ondemand-package-details.page';

const routes: Routes = [
  {
    path: '',
    component: OndemandPackageDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OndemandPackageDetailsPageRoutingModule {}
