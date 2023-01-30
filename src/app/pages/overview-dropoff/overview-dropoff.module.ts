import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewDropoffPageRoutingModule } from './overview-dropoff-routing.module';

import { OverviewDropoffPage } from './overview-dropoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewDropoffPageRoutingModule
  ],
  declarations: [OverviewDropoffPage]
})
export class OverviewDropoffPageModule {}
