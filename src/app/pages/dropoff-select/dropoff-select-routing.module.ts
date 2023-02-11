import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DropoffSelectPage } from './dropoff-select.page';

const routes: Routes = [
  {
    path: '',
    component: DropoffSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DropoffSelectPageRoutingModule {}
