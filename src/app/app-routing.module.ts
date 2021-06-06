import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'createaccount',
    loadChildren: () => import('./createaccount/createaccount.module').then(m => m.CreateaccountPageModule)
  },
  { path: 'logout', component: LogoutComponent }
  /* {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },

  {
    path: 'customerinformation',
    loadChildren: () => import('./pages/customerinformation/customerinformation.module').then( m => m.CustomerinformationPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
 
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
 
  {
    path: 'orderform',
    loadChildren: () => import('./pages/orderform/orderform.module').then( m => m.OrderformPageModule)
  },
  {
    path: 'customervisit',
    loadChildren: () => import('./pages/customervisit/customervisit.module').then( m => m.CustomervisitPageModule)
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
