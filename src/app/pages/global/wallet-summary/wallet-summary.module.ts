import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletSummaryPageRoutingModule } from './wallet-summary-routing.module';

import { WalletSummaryPage } from './wallet-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletSummaryPageRoutingModule
  ],
  declarations: [WalletSummaryPage]
})
export class WalletSummaryPageModule {}
