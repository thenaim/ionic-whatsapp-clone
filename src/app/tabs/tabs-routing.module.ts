import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'status',
        children: [
          {
            path: '',
            loadChildren: () => import('./status/status.module').then(m => m.StatusPageModule)
          },
        ]
      },
      {
        path: 'calls',
        children: [
          {
            path: '',
            loadChildren: () => import('./calls/calls.module').then(m => m.CallsPageModule)
          },
        ]
      },
      {
        path: 'chats',
        children: [
          {
            path: '',
            loadChildren: () => import('./chats/chats.module').then(m => m.ChatsPageModule)
          },
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/status',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/status',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
