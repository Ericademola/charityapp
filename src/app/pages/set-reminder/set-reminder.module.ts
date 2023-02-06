import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { SetReminderPageRoutingModule } from './set-reminder-routing.module';

import { SetReminderPage } from './set-reminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    SetReminderPageRoutingModule
  ],
  declarations: [SetReminderPage]
})
export class SetReminderPageModule {}
