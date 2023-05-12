import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseServicePage } from './choose-service.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseServicePageRoutingModule {}
