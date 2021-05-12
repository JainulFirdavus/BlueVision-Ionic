import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerinformationPage } from './customerinformation.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerinformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerinformationPageRoutingModule {}
