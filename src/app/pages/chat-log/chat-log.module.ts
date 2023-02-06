import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { ChatLogPageRoutingModule } from './chat-log-routing.module';

import { ChatLogPage } from './chat-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ChatLogPageRoutingModule
  ],
  declarations: [ChatLogPage]
})
export class ChatLogPageModule {}
