import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { OverviewPickupPageRoutingModule } from './overview-pickup-routing.module';

import { OverviewPickupPage } from './overview-pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    OverviewPickupPageRoutingModule
  ],
  declarations: [OverviewPickupPage]
})
export class OverviewPickupPageModule {}
