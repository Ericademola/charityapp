import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationHistoryPage } from './donation-history.page';

const routes: Routes = [
  {
    path: '',
    component: DonationHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationHistoryPageRoutingModule {}
