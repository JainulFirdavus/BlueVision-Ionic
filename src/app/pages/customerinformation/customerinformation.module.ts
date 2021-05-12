import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerinformationPageRoutingModule } from './customerinformation-routing.module';

import { CustomerinformationPage } from './customerinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerinformationPageRoutingModule
  ],
  declarations: [CustomerinformationPage]
})
export class CustomerinformationPageModule {}
