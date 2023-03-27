import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'home-page',
        loadChildren: () => import('../../pages/home-page/home-page.module').then( m => m.HomePagePageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../../pages/notification/notification.module').then( m => m.NotificationPageModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('../../pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/home-page',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/home-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
.3
