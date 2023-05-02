import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DonationsService } from './services/donations/donations.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],

  providers: [
    DonationsService,
    {
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy
    }
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
