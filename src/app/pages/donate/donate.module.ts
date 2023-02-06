import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { DonatePageRoutingModule } from './donate-routing.module';

import { DonatePage } from './donate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    DonatePageRoutingModule
  ],
  declarations: [DonatePage]
})
export class DonatePageModule {}
