import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarredMessagesPage } from './starred-messages.page';

const routes: Routes = [
  {
    path: '',
    component: StarredMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarredMessagesPageRoutingModule {}
