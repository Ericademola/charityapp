import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupSelectPage } from './pickup-select.page';

const routes: Routes = [
  {
    path: '',
    component: PickupSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupSelectPageRoutingModule {}
