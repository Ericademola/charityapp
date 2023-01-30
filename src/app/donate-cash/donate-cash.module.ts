import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonateCashPageRoutingModule } from './donate-cash-routing.module';

import { DonateCashPage } from './donate-cash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonateCashPageRoutingModule
  ],
  declarations: [DonateCashPage]
})
export class DonateCashPageModule {}
