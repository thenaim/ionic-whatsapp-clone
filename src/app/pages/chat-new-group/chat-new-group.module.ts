import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatNewGroupPageRoutingModule } from './chat-new-group-routing.module';

import { ChatNewGroupPage } from './chat-new-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatNewGroupPageRoutingModule
  ],
  declarations: [ChatNewGroupPage]
})
export class ChatNewGroupPageModule {}
