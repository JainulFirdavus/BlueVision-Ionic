import { Injector, Injectable } from '@angular/core';
/* import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; */
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
export class User {

  email: string;
  username: string;
  password: string;
  phone: string;

  constructor(email: string, username: string, password: string, phone: string) {

    this.email = email;
    this.username = username;
    this.password = password;
    this.phone = phone;
  }
}

@Injectable()

export class AuthProvider {

  currentUser: User;
  returnAccess: any;
  baseUrl = environment.baseUrl;
  /* handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  } */
  constructor(protected injector: Injector, private http: HttpClient) {

  }

  login(value) {
    console.log("value", value, this.baseUrl);
    return this.http.post(this.baseUrl + '/employee/login', { email: value.email, password: value.password }).pipe(
      map((res: any) => {
        if (res.status == 0) {
          return res
        } else {
          console.log("res", res);
          localStorage.setItem("token", JSON.stringify({ token: res.response.token, role: res.response.role, user_id: res.response._id, }));
          return res
        }
      }),
      catchError(() => of([]))
    );
  }


  logout() {
    localStorage.removeItem("token")
    return this.http.post(this.baseUrl + '/employee/logut', {})
  }

  register(value) {
    console.log("value", value, this.baseUrl);
    return this.http.post(this.baseUrl + '/employee/register', { username: value.username, email: value.email, password: value.password, phone: value.phone, role: value.role, createdBy: value.user, date: Date.now() })
  }


  getcustomer(value) {
    return this.http.post(this.baseUrl + '/user/userDetails', { phone: value.phone })

  }



}
