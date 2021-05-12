import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomervisitPage } from './customervisit.page';

const routes: Routes = [
  {
    path: '',
    component: CustomervisitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomervisitPageRoutingModule {}
