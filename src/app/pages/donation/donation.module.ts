import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { DonationPageRoutingModule } from './donation-routing.module';

import { DonationPage } from './donation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    DonationPageRoutingModule
  ],
  declarations: [DonationPage]
})
export class DonationPageModule {}
