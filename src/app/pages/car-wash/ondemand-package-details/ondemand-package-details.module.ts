import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndemandPackageDetailsPageRoutingModule } from './ondemand-package-details-routing.module';

import { OndemandPackageDetailsPage } from './ondemand-package-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndemandPackageDetailsPageRoutingModule
  ],
  declarations: [OndemandPackageDetailsPage]
})
export class OndemandPackageDetailsPageModule {}
