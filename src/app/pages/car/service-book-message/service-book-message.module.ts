import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceBookMessagePageRoutingModule } from './service-book-message-routing.module';

import { ServiceBookMessagePage } from './service-book-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceBookMessagePageRoutingModule
  ],
  declarations: [ServiceBookMessagePage]
})
export class ServiceBookMessagePageModule {}
