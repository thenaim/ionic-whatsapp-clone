import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatDetailPage } from './chat-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ChatDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatDetailPageRoutingModule {}
