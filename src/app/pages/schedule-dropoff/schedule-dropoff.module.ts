import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { ScheduleDropoffPageRoutingModule } from './schedule-dropoff-routing.module';

import { ScheduleDropoffPage } from './schedule-dropoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ScheduleDropoffPageRoutingModule
  ],
  declarations: [ScheduleDropoffPage]
})
export class ScheduleDropoffPageModule {}
