import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetReminderPage } from './set-reminder.page';

const routes: Routes = [
  {
    path: '',
    component: SetReminderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetReminderPageRoutingModule {}
