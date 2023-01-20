import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceBookMessagePage } from './service-book-message.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceBookMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceBookMessagePageRoutingModule {}
