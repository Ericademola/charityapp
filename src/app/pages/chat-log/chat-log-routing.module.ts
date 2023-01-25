import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatLogPage } from './chat-log.page';

const routes: Routes = [
  {
    path: '',
    component: ChatLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatLogPageRoutingModule {}
