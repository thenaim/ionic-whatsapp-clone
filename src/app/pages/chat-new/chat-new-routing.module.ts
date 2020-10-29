import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatNewPage } from './chat-new.page';

const routes: Routes = [
  {
    path: '',
    component: ChatNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatNewPageRoutingModule {}
