import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationStatusPageRoutingModule } from './donation-status-routing.module';

import { DonationStatusPage } from './donation-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationStatusPageRoutingModule
  ],
  declarations: [DonationStatusPage]
})
export class DonationStatusPageModule {}
