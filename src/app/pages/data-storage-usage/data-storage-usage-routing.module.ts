import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataStorageUsagePage } from './data-storage-usage.page';

const routes: Routes = [
  {
    path: '',
    component: DataStorageUsagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataStorageUsagePageRoutingModule {}
