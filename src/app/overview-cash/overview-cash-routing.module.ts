import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewCashPage } from './overview-cash.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewCashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewCashPageRoutingModule {}
