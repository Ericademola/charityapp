import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'welcome',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'tablinks',
  //   loadChildren: () => import('./pages/tablinks/tablinks.module').then( m => m.TablinksPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'get-started',
    loadChildren: () => import('./pages/get-started/get-started.module').then( m => m.GetStartedPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login-in',
    loadChildren: () => import('./pages/login-in/login-in.module').then( m => m.LoginInPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./pages/donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'chat-log',
    loadChildren: () => import('./pages/chat-log/chat-log.module').then( m => m.ChatLogPageModule)
  },
  {
    path: 'choose-service',
    loadChildren: () => import('./pages/choose-service/choose-service.module').then( m => m.ChooseServicePageModule)
  },
  {
    path: 'card-details',
    loadChildren: () => import('./pages/card-details/card-details.module').then( m => m.CardDetailsPageModule)
  },
  {
    path: 'book-pickup',
    loadChildren: () => import('./pages/book-pickup/book-pickup.module').then( m => m.BookPickupPageModule)
  },
  {
    path: 'donation-history',
    loadChildren: () => import('./pages/donation-history/donation-history.module').then( m => m.DonationHistoryPageModule)
  },
  {
    path: 'overview-dropoff',
    loadChildren: () => import('./pages/overview-dropoff/overview-dropoff.module').then( m => m.OverviewDropoffPageModule)
  },
  {
    path: 'overview-pickup',
    loadChildren: () => import('./pages/overview-pickup/overview-pickup.module').then( m => m.OverviewPickupPageModule)
  },
  {
    path: 'select-dropoff',
    loadChildren: () => import('./pages/select-dropoff/select-dropoff.module').then(m => m.SelectDropoffPageModule)
  },
  {
   path: 'overview-cash',
    loadChildren: () => import('./pages/overview-cash/overview-cash.module').then(m => m.OverviewCashPageModule)
  },
  {
    path: 'schedule-dropoff',
    loadChildren: () => import('./pages/schedule-dropoff/schedule-dropoff.module').then(m => m.ScheduleDropoffPageModule)
  },
  {
    path: 'schedule-pickup',
    loadChildren: () => import('./pages/schedule-pickup/schedule-pickup.module').then(m => m.SchedulePickupPageModule)
  },
  {
    path: 'donate-cash',
    loadChildren: () => import('./pages/donate-cash/donate-cash.module').then(m => m.DonateCashPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'donation',
    loadChildren: () => import('./pages/donation/donation.module').then( m => m.DonationPageModule)
  },
  {
    path: 'set-reminder',
    loadChildren: () => import('./pages/set-reminder/set-reminder.module').then( m => m.SetReminderPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//    MOVED TO TAB
// {
//   path: 'home-page',
//     loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
//   },
//   {
//     path: 'notification',
//     loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
//   },
// {
//   path: 'about-us',
//   loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
// },

