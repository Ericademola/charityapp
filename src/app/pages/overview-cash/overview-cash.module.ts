import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewCashPageRoutingModule } from './overview-cash-routing.module';

import { OverviewCashPage } from './overview-cash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewCashPageRoutingModule
  ],
  declarations: [OverviewCashPage]
})
export class OverviewCashPageModule {}
