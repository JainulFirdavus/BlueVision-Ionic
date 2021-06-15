(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\project\bluevision\BlueVision-Ionic\src\main.ts */"zUnb");


/***/ }),

/***/ "6ZOR":
/*!**************************************!*\
  !*** ./src/app/pages/pages.guard.ts ***!
  \**************************************/
/*! exports provided: PagesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesGuard", function() { return PagesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.service */ "Shlh");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");






let PagesGuard = class PagesGuard {
    constructor(auth, router, http) {
        this.auth = auth;
        this.router = router;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
    }
    canActivate(route, state) {
        if (!this.auth.isAuthenticated()) {
            console.log("false");
            this.router.navigate(['home']);
            return false;
        }
        else {
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
};
PagesGuard.ctorParameters = () => [
    { type: _pages_service__WEBPACK_IMPORTED_MODULE_4__["PageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PagesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PagesGuard);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // baseUrl: 'http://localhost:3000'
    baseUrl: 'http://18.117.248.161:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "8yf6");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "4XzM");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__);




let AppService = class AppService {
    constructor() {
        this.stringSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stringMessage = this.stringSubject.asObservable();
    }
    sendmessage(data) {
        this.stringSubject.next(data);
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "GqEg":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "KApT":
/*!***********************************!*\
  !*** ./src/app/providers/auth.ts ***!
  \***********************************/
/*! exports provided: User, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");


/* import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; */




class User {
    constructor(email, username, password, phone) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.phone = phone;
    }
}
let AuthProvider = class AuthProvider {
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
    constructor(injector, http) {
        this.injector = injector;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
    }
    login(value) {
        return this.http.post(this.baseUrl + '/employee/login', { email: value.email, password: value.password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            if (res.status == 0) {
                return res;
            }
            else {
                localStorage.setItem("token", JSON.stringify({ token: res.response.token, role: res.response.role, user_id: res.response.user_id, username: res.response.username }));
                return res;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([])));
    }
    logout() {
        localStorage.removeItem("token");
        return this.http.post(this.baseUrl + '/employee/logut', {});
    }
    register(value) {
        return this.http.post(this.baseUrl + '/employee/register', { username: value.username, email: value.email, password: value.password, phone: value.phone, role: value.role, createdBy: value.user, date: Date.now() });
    }
    getcustomer(value) {
        return this.http.post(this.baseUrl + '/user/userDetails', { phone: value.phone });
    }
};
AuthProvider.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
AuthProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthProvider);



/***/ }),

/***/ "Shlh":
/*!****************************************!*\
  !*** ./src/app/pages/pages.service.ts ***!
  \****************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");





// import { Observable } from 'rxjs/Observable';
let PageService = class PageService {
    constructor(jwtHelper, http) {
        this.jwtHelper = jwtHelper;
        this.http = http;
        /*  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
             req = req.clone({
                 setHeaders: {
                     'Content-Type': 'application/json; charset=utf-8',
                     'Accept': 'application/json',
                     'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`,
                 },
             })
         } */
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    isAuthenticated() {
        if (localStorage.getItem('token')) {
            const user = JSON.parse(localStorage.getItem('token'));
            if (this.jwtHelper.isTokenExpired(user['token'])) {
                localStorage.removeItem('token');
            }
            return !this.jwtHelper.isTokenExpired(user['token']);
        }
        else {
            return false;
        }
    }
    customerDetails(data) {
        return this.http.post(this.baseUrl + '/user/userDetails', data);
    }
    userorderList(data) {
        return this.http.post(this.baseUrl + '/order/userorderList', data);
    }
    getDeatils(data) {
        return this.http.post(this.baseUrl + '/employee/getDeatils', data);
    }
    customerVisit(data) {
        return this.http.post(this.baseUrl + '/user/customerVisit', data);
    }
    updateemployee(data) {
        return this.http.post(this.baseUrl + '/employee/update', data);
    }
    getsettings() {
        return this.http.post(this.baseUrl + '/admin/getsettings', {});
    }
    savesettings(data) {
        return this.http.post(this.baseUrl + '/admin/savesettings', data);
    }
};
PageService.ctorParameters = () => [
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PageService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "F5nt");





let AppComponent = class AppComponent {
    constructor(AppService) {
        this.AppService = AppService;
    }
    ngOnInit() {
        this.AppService.stringSubject.subscribe(items => {
            if (items == 'admin') {
                this.userName = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).username) ? JSON.parse(localStorage.getItem('token')).username : 'Blue Vision';
                this.menuList = [
                    {
                        name: 'Dashboard',
                        icon: 'aperture-outline',
                        url: '/dashboard'
                    },
                    {
                        name: 'Orders',
                        icon: 'bicycle-outline',
                        url: '/orders'
                    },
                    {
                        name: 'Information',
                        icon: 'flame-outline',
                        url: '/customerinformation'
                    },
                    {
                        name: 'Visit',
                        icon: 'bicycle-outline',
                        url: '/customervisit'
                    },
                    {
                        name: 'Report',
                        icon: 'ribbon-outline',
                        url: '/report'
                    },
                    {
                        name: 'My Profile',
                        icon: 'bicycle-outline',
                        url: '/profile'
                    },
                    {
                        name: 'Create Account',
                        icon: 'bicycle-outline',
                        url: '/newemployee'
                    },
                    {
                        name: 'Settings',
                        icon: 'settings-outline',
                        url: '/settings'
                    },
                    {
                        name: 'Logout',
                        icon: 'settings-outline',
                        url: 'logout'
                    },
                ];
            }
            else {
                this.menuList = [
                    {
                        name: 'Orders',
                        icon: 'bicycle-outline',
                        url: '/orders'
                    },
                    {
                        name: 'Information',
                        icon: 'flame-outline',
                        url: '/customerinformation'
                    },
                    {
                        name: 'Visit',
                        icon: 'bicycle-outline',
                        url: '/customervisit'
                    },
                    {
                        name: 'My Profile',
                        icon: 'bicycle-outline',
                        url: '/profile'
                    },
                    {
                        name: 'Logout',
                        icon: 'settings-outline',
                        url: 'logout'
                    },
                ];
            }
            // this.menuList = items;
        });
        // this.AppService.passValue(value)
        if (localStorage.getItem('token')) {
            var uses = JSON.parse(localStorage.getItem('token'));
            this.userName = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).username) ? JSON.parse(localStorage.getItem('token')).username : 'Blue Vision';
            if (uses.role == 'admin') {
                this.menuList = [
                    {
                        name: 'Dashboard',
                        icon: 'aperture-outline',
                        url: '/dashboard'
                    },
                    {
                        name: 'Orders',
                        icon: 'bicycle-outline',
                        url: '/orders'
                    },
                    {
                        name: 'Information',
                        icon: 'flame-outline',
                        url: '/customerinformation'
                    },
                    {
                        name: 'Visit',
                        icon: 'bicycle-outline',
                        url: '/customervisit'
                    },
                    {
                        name: 'Report',
                        icon: 'ribbon-outline',
                        url: '/report'
                    },
                    {
                        name: 'My Profile',
                        icon: 'bicycle-outline',
                        url: '/profile'
                    },
                    {
                        name: 'Create Employee',
                        icon: 'bicycle-outline',
                        url: '/newemployee'
                    },
                    {
                        name: 'Settings',
                        icon: 'settings-outline',
                        url: '/settings'
                    },
                    {
                        name: 'Logout',
                        icon: 'settings-outline',
                        url: 'logout'
                    },
                ];
            }
            else {
                this.menuList = [
                    {
                        name: 'Orders',
                        icon: 'bicycle-outline',
                        url: '/orders'
                    },
                    {
                        name: 'Information',
                        icon: 'flame-outline',
                        url: '/customerinformation'
                    },
                    {
                        name: 'Visit',
                        icon: 'bicycle-outline',
                        url: '/customervisit'
                    },
                    {
                        name: 'My Profile',
                        icon: 'bicycle-outline',
                        url: '/profile'
                    },
                    {
                        name: 'Logout',
                        icon: 'settings-outline',
                        url: 'logout'
                    },
                ];
            }
        }
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n    <ion-menu menuId=\"main-menu\" contentId=\"main\">\r\n        <ion-content>\r\n            <div class=\"menu-header-bg\"></div>\r\n            <div class=\"header-content\">\r\n                <img src=\"../assets/img/opticals.jpg\" alt=\"\">\r\n                <ion-label>\r\n                    <h2>{{userName}}</h2>\r\n                    <!-- <p>Opticals</p> -->\r\n                </ion-label>\r\n            </div>\r\n            <ion-list class=\"menu-items\" lines=\"none\">\r\n                <!-- {{menuList |json}} -->\r\n                <ion-menu-toggle *ngFor=\"let data of menuList\">\r\n                    <ion-item routerLink={{data.url}} class=\"menuborder\">\r\n                        <ion-icon name={{data.icon}}></ion-icon>{{data.name}}\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n                <!-- <ion-menu-toggle>\r\n                    <ion-item routerLink=\"/dashboard\" class=\"menuborder\">\r\n                        <ion-icon name=\"aperture-outline\"></ion-icon>Dashboard\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n                <ion-menu-toggle>\r\n                    <ion-item routerLink=\"/orders\" class=\"menuborder\">\r\n                        <ion-icon name=\"bicycle-outline\"></ion-icon>Orders\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n                <ion-menu-toggle>\r\n                    <ion-item routerLink=\"/customerinformation\" class=\"menuborder\">\r\n                        <ion-icon name=\"flame-outline\"></ion-icon>Customer Information\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n                <ion-menu-toggle>\r\n                    <ion-item routerLink=\"/customervisit\" class=\"menuborder\">\r\n                        <ion-icon name=\"bicycle-outline\"></ion-icon>Customer Visit\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n                <ion-menu-toggle>\r\n                    <ion-item routerLink=\"/Report\" class=\"menuborder\">\r\n                        <ion-icon name=\"ribbon-outline\"></ion-icon>Report\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n                <ion-menu-toggle>\r\n                    <ion-item routerLink=\"/settings\" class=\"menuborder\">\r\n                        <ion-icon name=\"settings-outline\"></ion-icon>Settings\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n                <ion-menu-toggle>\r\n                    <ion-item routerLink=\"logout\" class=\"menuborder\">\r\n                        <ion-icon name=\"settings-outline\"></ion-icon>Logout\r\n                    </ion-item>\r\n                </ion-menu-toggle> -->\r\n            </ion-list>\r\n        </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _pages_pages_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/pages.service */ "Shlh");
/* harmony import */ var _providers_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./providers/auth */ "KApT");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__["PagesModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__["JwtModule"].forRoot({
                config: {
                    tokenGetter: function tokenGetter() {
                        return localStorage.getItem('token');
                    }
                }
            })],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"] }, _pages_pages_service__WEBPACK_IMPORTED_MODULE_11__["PageService"], _providers_auth__WEBPACK_IMPORTED_MODULE_12__["AuthProvider"], _app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "viRw");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.service */ "Shlh");





// import { HomeComponent } from './home/home.component';
let PagesModule = class PagesModule {
};
PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
        ],
        providers: [
            _pages_service__WEBPACK_IMPORTED_MODULE_4__["PageService"],
        ],
    })
], PagesModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "n1B2":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_logout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./logout.component.html */ "r6bu");
/* harmony import */ var _logout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout.component.scss */ "GqEg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth */ "KApT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let LogoutComponent = class LogoutComponent {
    constructor(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    ngOnInit() {
        this._authService.logout();
        this.router.navigate(['home']);
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _providers_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LogoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logout',
        template: _raw_loader_logout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LogoutComponent);



/***/ }),

/***/ "r6bu":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  logout works!\r\n</p>\r\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout/logout.component */ "n1B2");




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'createaccount',
        loadChildren: () => __webpack_require__.e(/*! import() | createaccount-createaccount-module */ "createaccount-createaccount-module").then(__webpack_require__.bind(null, /*! ./createaccount/createaccount.module */ "Mc2s")).then(m => m.CreateaccountPageModule)
    },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"] }
    /* {
      path: 'dashboard',
      loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
    },
    {
      path: 'orders',
      loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
    },
  
    {
      path: 'customerinformation',
      loadChildren: () => import('./pages/customerinformation/customerinformation.module').then( m => m.CustomerinformationPageModule)
    },
    {
      path: 'report',
      loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
    },
   
    {
      path: 'settings',
      loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
    },
   
    {
      path: 'orderform',
      loadChildren: () => import('./pages/orderform/orderform.module').then( m => m.OrderformPageModule)
    },
    {
      path: 'customervisit',
      loadChildren: () => import('./pages/customervisit/customervisit.module').then( m => m.CustomervisitPageModule)
    }, */
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "viRw":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.guard */ "6ZOR");




const routes = [
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "/2RN")).then(m => m.DashboardPageModule),
        canActivate: [_pages_guard__WEBPACK_IMPORTED_MODULE_3__["PagesGuard"]]
    },
    {
        path: 'orders',
        loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "orders-orders-module").then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "Xlj8")).then(m => m.OrdersPageModule),
        canActivate: [_pages_guard__WEBPACK_IMPORTED_MODULE_3__["PagesGuard"]]
    },
    {
        path: 'newemployee',
        loadChildren: () => __webpack_require__.e(/*! import() | newemployee-newemployee-module */ "newemployee-newemployee-module").then(__webpack_require__.bind(null, /*! ./newemployee/newemployee.module */ "lnWm")).then(m => m.newEmployeePageModule),
        canActivate: [_pages_guard__WEBPACK_IMPORTED_MODULE_3__["PagesGuard"]]
    },
    {
        path: 'customerinformation',
        loadChildren: () => __webpack_require__.e(/*! import() | customerinformation-customerinformation-module */ "customerinformation-customerinformation-module").then(__webpack_require__.bind(null, /*! ./customerinformation/customerinformation.module */ "x8+w")).then(m => m.CustomerinformationPageModule),
        canActivate: [_pages_guard__WEBPACK_IMPORTED_MODULE_3__["PagesGuard"]]
    },
    {
        path: 'report',
        loadChildren: () => __webpack_require__.e(/*! import() | report-report-module */ "report-report-module").then(__webpack_require__.bind(null, /*! ./report/report.module */ "Q0Id")).then(m => m.ReportPageModule),
        canActivate: [_pages_guard__WEBPACK_IMPORTED_MODULE_3__["PagesGuard"]]
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "723k")).then(m => m.ProfilePageModule),
        canActivate: [_pages_guard__WEBPACK_IMPORTED_MODULE_3__["PagesGuard"]]
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "yPrK")).then(m => m.SettingsPageModule),
        canActivate: [_pages_guard__WEBPACK_IMPORTED_MODULE_3__["PagesGuard"]]
    },
    {
        path: 'ordersdetails',
        loadChildren: () => __webpack_require__.e(/*! import() | ordersdetails-ordersdetails-module */ "ordersdetails-ordersdetails-module").then(__webpack_require__.bind(null, /*! ./ordersdetails/ordersdetails.module */ "Fjhy")).then(m => m.OrdersdetailsModule),
        canActivate: [_pages_guard__WEBPACK_IMPORTED_MODULE_3__["PagesGuard"]]
    },
    {
        path: 'orderform',
        loadChildren: () => __webpack_require__.e(/*! import() | orderform-orderform-module */ "orderform-orderform-module").then(__webpack_require__.bind(null, /*! ./orderform/orderform.module */ "27Th")).then(m => m.OrderformPageModule),
        canActivate: [_pages_guard__WEBPACK_IMPORTED_MODULE_3__["PagesGuard"]]
    },
    {
        path: 'customervisit',
        loadChildren: () => __webpack_require__.e(/*! import() | customervisit-customervisit-module */ "customervisit-customervisit-module").then(__webpack_require__.bind(null, /*! ./customervisit/customervisit.module */ "VwyX")).then(m => m.CustomervisitPageModule),
        canActivate: [_pages_guard__WEBPACK_IMPORTED_MODULE_3__["PagesGuard"]]
    },
];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PagesRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background: linear-gradient(135deg, #52E5E7 10%, #130CB7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  border: 5px solid #dcdcdc;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 600;\n  color: #fff;\n  font-size: 24px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 25px;\n}\n\n.action-button ion-button {\n  text-transform: capitalize;\n  font-weight: 400;\n  font-size: 22px;\n  --background: #628cff;\n  --border-radius: 10px;\n  --box-shadow: none;\n}\n\n.action-button ion-icon {\n  margin-right: 1px;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #000000;\n}\n\n.menu-items ion-item {\n  padding-left: 15px;\n  margin-bottom: 10px;\n  font-size: 20px;\n}\n\n.menu-items .menus {\n  text-decoration: none;\n  color: #000000;\n}\n\n.menu-items .menuborder:hover {\n  border-left: 5px solid;\n  color: #7590d6;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOERBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRVI7O0FBQUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRVI7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUFJO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFUjs7QUFBSTtFQUNJLGlCQUFBO0FBRVI7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFFUjs7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRVI7O0FBQUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFFUjs7QUFBSTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRVIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxufVxyXG5cclxuLm1lbnUtaGVhZGVyLWJnIHtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIDEzNWRlZywgIzUyRTVFNyAxMCUsICMxMzBDQjcgMTAwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSg5OCwgMTQwLCAyNTUsIDAuNSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzYyOGNmZjtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVudS1pdGVtcyB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnVzIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAubWVudWJvcmRlcjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcclxuICAgICAgICBjb2xvcjogIzc1OTBkNjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map