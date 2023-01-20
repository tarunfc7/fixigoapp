import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OndemandPackageOrderPage } from './ondemand-package-order.page';

const routes: Routes = [
  {
    path: '',
    component: OndemandPackageOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OndemandPackageOrderPageRoutingModule {}
