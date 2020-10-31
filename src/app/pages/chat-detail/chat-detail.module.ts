import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatDetailPageRoutingModule } from './chat-detail-routing.module';

import { ChatDetailPage } from './chat-detail.page';
import { ChatGroupModule } from '../../components/chat-group/chat-group.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatDetailPageRoutingModule,

    ChatGroupModule
  ],
  declarations: [ChatDetailPage]
})
export class ChatDetailPageModule { }
