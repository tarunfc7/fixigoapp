import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndemandPageRoutingModule } from './ondemand-routing.module';

import { OndemandPage } from './ondemand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndemandPageRoutingModule
  ],
  declarations: [OndemandPage]
})
export class OndemandPageModule {}
