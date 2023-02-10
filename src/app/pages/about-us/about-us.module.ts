import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { AboutUsPageRoutingModule } from './about-us-routing.module';

import { AboutUsPage } from './about-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    AboutUsPageRoutingModule
  ],
  declarations: [AboutUsPage]
})
export class AboutUsPageModule {}
