import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OndemandPackagePage } from './ondemand-package.page';

const routes: Routes = [
  {
    path: '',
    component: OndemandPackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OndemandPackagePageRoutingModule {}
