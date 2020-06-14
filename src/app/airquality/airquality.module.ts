import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirqualityPageRoutingModule } from './airquality-routing.module';

import { AirqualityPage } from './airquality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirqualityPageRoutingModule
  ],
  declarations: [AirqualityPage]
})
export class AirqualityPageModule {}
