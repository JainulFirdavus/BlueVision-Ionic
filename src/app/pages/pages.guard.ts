import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageService } from './pages.service'; import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesGuard implements CanActivate/* , CanActivateChild, CanDeactivate<unknown>, CanLoad */ {
  constructor(public auth: PageService, public router: Router, private http: HttpClient) { }
  baseUrl = environment.baseUrl;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.auth.isAuthenticated()) {
      console.log("false");
      this.router.navigate(['home']);
      return false;
    } else {
      return true;

      /* let user = JSON.parse(localStorage.getItem('token'))
      this.http.post(this.baseUrl + '/employee/getDeatils', { _id: user.user_id }).subscribe(data => {
        if (data['status'] == 0) {
          localStorage.removeItem('token')
          this.router.navigate(['/logout']);
        } else {
          console.log('dsad');
          return true;
        }
      }) */
    }
  }
  /* 
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } */
}
