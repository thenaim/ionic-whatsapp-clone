import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatNewGroupPage } from './chat-new-group.page';

const routes: Routes = [
  {
    path: '',
    component: ChatNewGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatNewGroupPageRoutingModule {}
