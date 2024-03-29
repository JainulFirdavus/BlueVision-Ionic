import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AuthProvider } from '../providers/auth';
import { HttpClientModule } from '@angular/common/http';



import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    HttpClientModule
  ], providers: [AuthProvider],
  declarations: [HomePage]
})
export class HomePageModule { }
