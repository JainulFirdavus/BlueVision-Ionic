import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesGuard } from './pages.guard';
import { InvoiceComponent } from './invoice/invoice.component'
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
    path: 'newemployee',
    loadChildren: () => import('./newemployee/newemployee.module').then(m => m.newEmployeePageModule),
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
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
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
  {
    path: 'branches',
    loadChildren: () => import('./branches/branches.module').then(m => m.BranchesPageModule),
    canActivate: [PagesGuard]

  },
  {
    path: 'invoice/:invoiceId',
    loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule),
    // component: InvoiceComponent,
    canActivate: [PagesGuard]

  },
  {
    path: 'branches/:brancheId',
    loadChildren: () => import('./editbranch/editbranch.module').then(m => m.editBranchModule),
     
    canActivate: [PagesGuard]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }

