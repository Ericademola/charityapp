import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectDropoffPage } from './select-dropoff.page';

const routes: Routes = [
  {
    path: '',
    component: SelectDropoffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDropoffPageRoutingModule {}
