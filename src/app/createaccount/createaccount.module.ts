import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthProvider } from '../providers/auth';

import { CreateaccountPageRoutingModule } from './createaccount-routing.module';
import { CreateaccountPage } from './createaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateaccountPageRoutingModule
  ], providers: [AuthProvider],
  declarations: [CreateaccountPage]
})
export class CreateaccountPageModule { }
