import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsappWebDesktopPageRoutingModule } from './whatsapp-web-desktop-routing.module';

import { WhatsappWebDesktopPage } from './whatsapp-web-desktop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatsappWebDesktopPageRoutingModule
  ],
  declarations: [WhatsappWebDesktopPage]
})
export class WhatsappWebDesktopPageModule {}
