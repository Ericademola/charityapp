import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleDropoffPage } from './schedule-dropoff.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleDropoffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleDropoffPageRoutingModule {}
