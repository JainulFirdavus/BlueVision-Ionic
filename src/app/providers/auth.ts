import { Injector, Injectable } from '@angular/core';
/* import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
export class User {

  displayname: string;
  username: string;
  password: string;
  remember: string;

  constructor(displayname: string, username: string, password: string, remember: string) {

    this.displayname = displayname;
    this.username = username;
    this.password = password;
    this.remember = remember;
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
    return this.http.post(this.baseUrl + '/employee/login', { email: value.email, password: value.password })
  }


  register(value) {
    console.log("value", value, this.baseUrl);
    return this.http.post(this.baseUrl + '/employee/register', { username: value.username, email: value.email, password: value.password, phone: value.phone, role: 'employee', createdBy: value.user, date: Date.now() })
  }

}
