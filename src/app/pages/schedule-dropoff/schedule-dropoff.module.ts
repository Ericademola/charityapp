import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleDropoffPageRoutingModule } from './schedule-dropoff-routing.module';

import { ScheduleDropoffPage } from './schedule-dropoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleDropoffPageRoutingModule
  ],
  declarations: [ScheduleDropoffPage]
})
export class ScheduleDropoffPageModule {}
