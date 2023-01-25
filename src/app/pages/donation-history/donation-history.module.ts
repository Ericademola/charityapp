import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationHistoryPageRoutingModule } from './donation-history-routing.module';

import { DonationHistoryPage } from './donation-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationHistoryPageRoutingModule
  ],
  declarations: [DonationHistoryPage]
})
export class DonationHistoryPageModule {}
