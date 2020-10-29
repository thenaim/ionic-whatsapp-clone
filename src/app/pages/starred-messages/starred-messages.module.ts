import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarredMessagesPageRoutingModule } from './starred-messages-routing.module';

import { StarredMessagesPage } from './starred-messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarredMessagesPageRoutingModule
  ],
  declarations: [StarredMessagesPage]
})
export class StarredMessagesPageModule {}
