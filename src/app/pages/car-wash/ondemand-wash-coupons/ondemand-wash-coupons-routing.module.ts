import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OndemandWashCouponsPage } from './ondemand-wash-coupons.page';

const routes: Routes = [
  {
    path: '',
    component: OndemandWashCouponsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OndemandWashCouponsPageRoutingModule {}
