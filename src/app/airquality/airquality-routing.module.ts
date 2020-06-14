import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirqualityPage } from './airquality.page';

const routes: Routes = [
  {
    path: '',
    component: AirqualityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirqualityPageRoutingModule {}
