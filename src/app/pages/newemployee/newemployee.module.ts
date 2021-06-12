import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { newEmployeePageRoutingModule } from './newemployee-routing.module';

import { NewemployeeComponent } from './newemployee.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    newEmployeePageRoutingModule
  ],
  declarations: [NewemployeeComponent]
})
export class newEmployeePageModule { }
