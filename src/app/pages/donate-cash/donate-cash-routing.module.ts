import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonateCashPage } from './donate-cash.page';

const routes: Routes = [
  {
    path: '',
    component: DonateCashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonateCashPageRoutingModule {}
