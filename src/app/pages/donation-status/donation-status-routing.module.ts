import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationStatusPage } from './donation-status.page';

const routes: Routes = [
  {
    path: '',
    component: DonationStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationStatusPageRoutingModule {}
