import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallsPage } from './calls.page';

const routes: Routes = [
  {
    path: '',
    component: CallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallsPageRoutingModule {}
