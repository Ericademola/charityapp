import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPickupPage } from './book-pickup.page';

const routes: Routes = [
  {
    path: '',
    component: BookPickupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPickupPageRoutingModule {}
