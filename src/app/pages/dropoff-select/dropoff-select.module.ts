import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { DropoffSelectPageRoutingModule } from './dropoff-select-routing.module';

import { DropoffSelectPage } from './dropoff-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    DropoffSelectPageRoutingModule
  ],
  declarations: [DropoffSelectPage]
})
export class DropoffSelectPageModule {}
