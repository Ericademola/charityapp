import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
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
    path: 'donation',
    loadChildren: () => import('./pages/donation/donation.module').then( m => m.DonationPageModule)
  },
  {
  path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'set-reminder',
    loadChildren: () => import('./pages/set-reminder/set-reminder.module').then( m => m.SetReminderPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'donation-history',
    loadChildren: () => import('./pages/donation-history/donation-history.module').then( m => m.DonationHistoryPageModule)
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
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'overview-cash',
    loadChildren: () => import('./overview-cash/overview-cash.module').then( m => m.OverviewCashPageModule)
  },
  {
    path: 'schedule-dropoff',
    loadChildren: () => import('./schedule-dropoff/schedule-dropoff.module').then( m => m.ScheduleDropoffPageModule)
  },
  {
    path: 'schedule-pickup',
    loadChildren: () => import('./schedule-pickup/schedule-pickup.module').then( m => m.SchedulePickupPageModule)
  },
  {
    path: 'donate-cash',
    loadChildren: () => import('./donate-cash/donate-cash.module').then( m => m.DonateCashPageModule)
  },
  {
    path: 'choose-service',
    loadChildren: () => import('./choose-service/choose-service.module').then( m => m.ChooseServicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
