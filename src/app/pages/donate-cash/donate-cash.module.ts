import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { DonateCashPageRoutingModule } from './donate-cash-routing.module';

import { DonateCashPage } from './donate-cash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    DonateCashPageRoutingModule
  ],
  declarations: [DonateCashPage]
})
export class DonateCashPageModule {}
