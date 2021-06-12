import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { PageService } from './pages/pages.service';
import { AuthProvider } from './providers/auth';
import { AppService } from './app.service';


import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, ReactiveFormsModule, HttpClientModule, PagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('token');
        }
      }
    })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, PageService, AuthProvider, AppService],
  bootstrap: [AppComponent],
})
export class AppModule { }
