

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class PageService {
    constructor(public jwtHelper: JwtHelperService, private http: HttpClient) { }
    /*  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         req = req.clone({
             setHeaders: {
                 'Content-Type': 'application/json; charset=utf-8',
                 'Accept': 'application/json',
                 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`,
             },
         })
     } */

    baseUrl = environment.baseUrl;


    public isAuthenticated(): boolean {

        if (localStorage.getItem('token')) {
            const user = JSON.parse(localStorage.getItem('token'));
            if (this.jwtHelper.isTokenExpired(user['token'])) {
                localStorage.removeItem('token')
            }
            return !this.jwtHelper.isTokenExpired(user['token']);
        } else {
            return false
        }
    }


    public customerDetails(data): any {

        return this.http.post(this.baseUrl + '/user/userDetails', data)
    }

    public userorderList(data): any {

        return this.http.post(this.baseUrl + '/order/userorderList', data)
    }


    public getDeatils(data): any {
        return this.http.post(this.baseUrl + '/employee/getDeatils', data)
    }

    public customerVisit(data): any {
        return this.http.post(this.baseUrl + '/user/customerVisit', data)
    }

    
    public sendmessage(data): any {
        return this.http.post(this.baseUrl + '/user/sendmessage', data)
    }


    public updateemployee(data): any {
        return this.http.post(this.baseUrl + '/employee/update', data)
    }


    public getsettings(): any {
        return this.http.post(this.baseUrl + '/admin/getsettings', {})
    }

    public savesettings(data): any {

        return this.http.post(this.baseUrl + '/admin/savesettings', data)
    }

}

