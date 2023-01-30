import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectDropoffPageRoutingModule } from './select-dropoff-routing.module';

import { SelectDropoffPage } from './select-dropoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectDropoffPageRoutingModule
  ],
  declarations: [SelectDropoffPage]
})
export class SelectDropoffPageModule {}
