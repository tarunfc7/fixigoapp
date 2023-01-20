import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclesListPageRoutingModule } from './vehicles-list-routing.module';

import { VehiclesListPage } from './vehicles-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiclesListPageRoutingModule
  ],
  declarations: [VehiclesListPage]
})
export class VehiclesListPageModule {}
