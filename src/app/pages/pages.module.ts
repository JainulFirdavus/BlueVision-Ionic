import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PageService } from './pages.service';
// import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
   
  ],
  providers: [
    PageService,
  ],
})
export class PagesModule { }
