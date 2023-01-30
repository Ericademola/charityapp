import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookPickupPageRoutingModule } from './book-pickup-routing.module';

import { BookPickupPage } from './book-pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookPickupPageRoutingModule
  ],
  declarations: [BookPickupPage]
})
export class BookPickupPageModule {}
