import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesGuard } from './pages.guard';
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule),
    canActivate: [PagesGuard]
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersPageModule),
    canActivate: [PagesGuard]

  },

  {
    path: 'customerinformation',
    loadChildren: () => import('./customerinformation/customerinformation.module').then(m => m.CustomerinformationPageModule),
    canActivate: [PagesGuard]

  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then(m => m.ReportPageModule),
    canActivate: [PagesGuard]

  },

  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule),
    canActivate: [PagesGuard]

  },
  {
    path: 'ordersdetails',
    loadChildren: () => import('./ordersdetails/ordersdetails.module').then(m => m.OrdersdetailsModule),
    canActivate: [PagesGuard]

  },
  {
    path: 'orderform',
    loadChildren: () => import('./orderform/orderform.module').then(m => m.OrderformPageModule),
    canActivate: [PagesGuard]

  },
  {
    path: 'customervisit',
    loadChildren: () => import('./customervisit/customervisit.module').then(m => m.CustomervisitPageModule),
    canActivate: [PagesGuard]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }

