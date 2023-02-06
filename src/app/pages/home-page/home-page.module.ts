import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePagePageRoutingModule } from './home-page-routing.module';

import { HomePagePage } from './home-page.page';
//import { FooterComponent } from 'src/app/components/footer/footer.component'

@NgModule({
    declarations: [HomePagePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePagePageRoutingModule,
    ]
})
export class HomePagePageModule {}

