import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusPrivacyPageRoutingModule } from './status-privacy-routing.module';

import { StatusPrivacyPage } from './status-privacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusPrivacyPageRoutingModule
  ],
  declarations: [StatusPrivacyPage]
})
export class StatusPrivacyPageModule {}
