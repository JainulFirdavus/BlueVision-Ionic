import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthProvider } from '../../providers/auth';

import { IonicModule } from '@ionic/angular';
import { CustomerinformationPageRoutingModule } from './customerinformation-routing.module';
import { CustomerinformationPage } from './customerinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    CustomerinformationPageRoutingModule
  ],
  declarations: [CustomerinformationPage]
})
export class CustomerinformationPageModule { }
