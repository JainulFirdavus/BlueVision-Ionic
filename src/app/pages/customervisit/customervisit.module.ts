import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomervisitPageRoutingModule } from './customervisit-routing.module';

import { CustomervisitPage } from './customervisit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomervisitPageRoutingModule
  ],
  declarations: [CustomervisitPage]
})
export class CustomervisitPageModule {}
