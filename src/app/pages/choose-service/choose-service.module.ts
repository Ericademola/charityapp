import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { ChooseServicePageRoutingModule } from './choose-service-routing.module';

import { ChooseServicePage } from './choose-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ChooseServicePageRoutingModule
  ],
  declarations: [ChooseServicePage]
})
export class ChooseServicePageModule {}
