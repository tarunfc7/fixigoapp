import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OndemandOrderTrackingPage } from './ondemand-order-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: OndemandOrderTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OndemandOrderTrackingPageRoutingModule {}
