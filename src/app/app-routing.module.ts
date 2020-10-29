import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'status-privacy',
    loadChildren: () => import('./pages/status-privacy/status-privacy.module').then( m => m.StatusPrivacyPageModule)
  },
  {
    path: 'chat-detail',
    loadChildren: () => import('./pages/chat-detail/chat-detail.module').then( m => m.ChatDetailPageModule)
  },
  {
    path: 'chat-new',
    loadChildren: () => import('./pages/chat-new/chat-new.module').then( m => m.ChatNewPageModule)
  },
  {
    path: 'chat-new-group',
    loadChildren: () => import('./pages/chat-new-group/chat-new-group.module').then( m => m.ChatNewGroupPageModule)
  },
  {
    path: 'starred-messages',
    loadChildren: () => import('./pages/starred-messages/starred-messages.module').then( m => m.StarredMessagesPageModule)
  },
  {
    path: 'whatsapp-web-desktop',
    loadChildren: () => import('./pages/whatsapp-web-desktop/whatsapp-web-desktop.module').then( m => m.WhatsappWebDesktopPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'data-storage-usage',
    loadChildren: () => import('./pages/data-storage-usage/data-storage-usage.module').then( m => m.DataStorageUsagePageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
