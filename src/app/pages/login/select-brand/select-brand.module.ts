import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectBrandPageRoutingModule } from './select-brand-routing.module';

import { SelectBrandPage } from './select-brand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectBrandPageRoutingModule
  ],
  declarations: [SelectBrandPage]
})
export class SelectBrandPageModule {}
