import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersdetailsComponent } from './ordersdetails.component';

const routes: Routes = [
    {
        path: '',
        component: OrdersdetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrdersdetailsPageRoutingModule { }
