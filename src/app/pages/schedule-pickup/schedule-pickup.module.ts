import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { SchedulePickupPageRoutingModule } from './schedule-pickup-routing.module';

import { SchedulePickupPage } from './schedule-pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    SchedulePickupPageRoutingModule
  ],
  declarations: [SchedulePickupPage]
})
export class SchedulePickupPageModule {}
