import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulePickupPageRoutingModule } from './schedule-pickup-routing.module';

import { SchedulePickupPage } from './schedule-pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePickupPageRoutingModule
  ],
  declarations: [SchedulePickupPage]
})
export class SchedulePickupPageModule {}
