import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatsappWebDesktopPage } from './whatsapp-web-desktop.page';

const routes: Routes = [
  {
    path: '',
    component: WhatsappWebDesktopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatsappWebDesktopPageRoutingModule {}
