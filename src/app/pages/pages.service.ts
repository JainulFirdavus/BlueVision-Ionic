

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
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token')) {
            const user = JSON.parse(localStorage.getItem('token'));
            console.log(user['token'], this.jwtHelper.isTokenExpired(user['token']));
            if (this.jwtHelper.isTokenExpired(user['token'])) {
                localStorage.removeItem('token')
            }
            return !this.jwtHelper.isTokenExpired(user['token']);
        } else {
            return false
        }
    }


    public customerDetails(data): any {
        console.log(data);
        return this.http.post(this.baseUrl + '/user/userDetails', data)
    }

    public userorderList(data): any {
        console.log(data);
        return this.http.post(this.baseUrl + '/order/userorderList', data)
    }


    public getDeatils(data): any {
        return this.http.post(this.baseUrl + '/employee/getDeatils', data)
    }

    public customerVisit(data): any {
        console.log(data);
        return this.http.post(this.baseUrl + '/user/customerVisit', data)
    }


    public updateemployee(data): any {
        console.log(data);
        return this.http.post(this.baseUrl + '/employee/update', data)
    }


    public getsettings(): any {
        return this.http.post(this.baseUrl + '/admin/getsettings', {})
    }

    public savesettings(data): any {
        console.log(data);
        return this.http.post(this.baseUrl + '/admin/savesettings', data)
    }

}

