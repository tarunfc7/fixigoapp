import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndemandPackagePageRoutingModule } from './ondemand-package-routing.module';

import { OndemandPackagePage } from './ondemand-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndemandPackagePageRoutingModule
  ],
  declarations: [OndemandPackagePage]
})
export class OndemandPackagePageModule {}
