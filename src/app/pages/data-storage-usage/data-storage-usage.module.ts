import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataStorageUsagePageRoutingModule } from './data-storage-usage-routing.module';

import { DataStorageUsagePage } from './data-storage-usage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataStorageUsagePageRoutingModule
  ],
  declarations: [DataStorageUsagePage]
})
export class DataStorageUsagePageModule {}
