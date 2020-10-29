import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatNewPageRoutingModule } from './chat-new-routing.module';

import { ChatNewPage } from './chat-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatNewPageRoutingModule
  ],
  declarations: [ChatNewPage]
})
export class ChatNewPageModule {}
