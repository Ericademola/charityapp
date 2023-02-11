import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { PickupSelectPageRoutingModule } from './pickup-select-routing.module';

import { PickupSelectPage } from './pickup-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    PickupSelectPageRoutingModule
  ],
  declarations: [PickupSelectPage]
})
export class PickupSelectPageModule {}
