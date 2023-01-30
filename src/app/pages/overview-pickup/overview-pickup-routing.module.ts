import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewPickupPage } from './overview-pickup.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewPickupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewPickupPageRoutingModule {}
