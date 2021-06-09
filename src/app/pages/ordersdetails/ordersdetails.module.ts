import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersdetailsComponent } from './ordersdetails.component';
import { OrdersdetailsPageRoutingModule } from './orderdetails.routing.module';



@NgModule({
  declarations: [OrdersdetailsComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule, OrdersdetailsPageRoutingModule
  ],
})
export class OrdersdetailsModule { }
