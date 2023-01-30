import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulePickupPage } from './schedule-pickup.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulePickupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulePickupPageRoutingModule {}
