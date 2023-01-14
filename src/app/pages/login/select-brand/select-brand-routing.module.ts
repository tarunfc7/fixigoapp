import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectBrandPage } from './select-brand.page';

const routes: Routes = [
  {
    path: '',
    component: SelectBrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectBrandPageRoutingModule {}
