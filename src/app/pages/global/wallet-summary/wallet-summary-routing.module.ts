import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletSummaryPage } from './wallet-summary.page';

const routes: Routes = [
  {
    path: '',
    component: WalletSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletSummaryPageRoutingModule {}
