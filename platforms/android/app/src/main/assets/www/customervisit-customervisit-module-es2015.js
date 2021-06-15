(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customervisit-customervisit-module"],{

/***/ "Nm4W":
/*!*********************************************************************!*\
  !*** ./src/app/pages/customervisit/customervisit-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CustomervisitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomervisitPageRoutingModule", function() { return CustomervisitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customervisit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customervisit.page */ "tgi2");




const routes = [
    {
        path: '',
        component: _customervisit_page__WEBPACK_IMPORTED_MODULE_3__["CustomervisitPage"]
    }
];
let CustomervisitPageRoutingModule = class CustomervisitPageRoutingModule {
};
CustomervisitPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomervisitPageRoutingModule);



/***/ }),

/***/ "VwyX":
/*!*************************************************************!*\
  !*** ./src/app/pages/customervisit/customervisit.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomervisitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomervisitPageModule", function() { return CustomervisitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _customervisit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customervisit-routing.module */ "Nm4W");
/* harmony import */ var _customervisit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customervisit.page */ "tgi2");







let CustomervisitPageModule = class CustomervisitPageModule {
};
CustomervisitPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customervisit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomervisitPageRoutingModule"]
        ],
        declarations: [_customervisit_page__WEBPACK_IMPORTED_MODULE_6__["CustomervisitPage"]]
    })
], CustomervisitPageModule);



/***/ }),

/***/ "a6BE":
/*!*************************************************************!*\
  !*** ./src/app/pages/customervisit/customervisit.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 75px;\n  --background: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);\n}\n\nion-menu-button {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n}\n\nion-title {\n  font-size: 28px;\n  margin-top: 12px;\n  text-align: center;\n  margin-left: 15px;\n  color: #fff;\n}\n\nion-icon {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n  margin-left: 12px;\n}\n\nion-item {\n  border: 1px solid grey;\n  font-size: 16px;\n  margin: 30px 40px;\n  color: #000;\n}\n\nion-item.item-has-focus > ion-label {\n  color: #000 !important;\n}\n\nion-button {\n  margin-top: 20px;\n  width: 30%;\n  color: #000;\n  --background: #52E5E7;\n}\n\nh2 {\n  margin-top: 50px;\n}\n\n.form {\n  margin-top: 35%;\n}\n\n.tablename {\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid #ddd;\n  background: #dcdcdc;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nth {\n  text-align: left;\n  padding: 10px 10px;\n  white-space: nowrap;\n  font-size: 15px;\n}\n\ntd {\n  text-align: center;\n  padding: 10px 10px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjdXN0b21lcnZpc2l0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpRUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtBQUZKIiwiZmlsZSI6ImN1c3RvbWVydmlzaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIDEzNWRlZywgIzUyRTVFNyAxMCUsICMxMzBDQjcgMTAwJSk7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDMwcHggNDBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5pb24taXRlbS5pdGVtLWhhcy1mb2N1cz5pb24tbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNTJFNUU3O1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuaDIge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMzUlO1xyXG59XHJcblxyXG5cclxuXHJcbi50YWJsZW5hbWUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQ6ICNkY2RjZGM7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxudGgge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn0iXX0= */");

/***/ }),

/***/ "gu1H":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customervisit/customervisit.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\r\n\r\n    <ion-title>Blue Vision</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-icon slot=\"start\" routerLink=\"{{user_home}}\" name=\"home\"></ion-icon>\r\n</ion-toolbar>\r\n<ion-content>\r\n    <div>\r\n        <h2 class=\"ion-text-center\">Customer Visit</h2>\r\n    </div>\r\n    <form [formGroup]=\"getuser\" (ngSubmit)=\"submit()\">\r\n        <div class=\"orders\"></div>\r\n        <div class=\"form ion-text-center\">\r\n            <ion-item lines='none'>\r\n                <ion-label position=\"floating\"> Date</ion-label>\r\n                <ion-datetime formControlName=\"date\" required></ion-datetime>\r\n            </ion-item>\r\n            <ion-button class=\"cancelbtn\" type=\"submit\" size=\"medium\">Submit</ion-button>\r\n        </div>\r\n\r\n\r\n        <div class=\"tablename\" style=\"overflow-x:auto;\" *ngIf=\"userList\">\r\n            <table>\r\n                <tr>\r\n                    <th class=\"order\">Customer Name</th>\r\n                    <th class=\"order\">Phone</th>\r\n                    <th class=\"order\">Visting Date</th>\r\n                    <th class=\"order\">Last Purchase Date</th>\r\n                </tr>\r\n\r\n                <tr *ngFor=\"let users of userList\">\r\n                    <td>{{users.customer_name}}</td>\r\n                    <td>{{users.customer_phone}}</td>\r\n                    <td>{{users.created | date:'fullDate'}}</td>\r\n                    <td>{{users.next_visit | date:'fullDate'}}</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n\r\n    </form>\r\n</ion-content>");

/***/ }),

/***/ "tgi2":
/*!***********************************************************!*\
  !*** ./src/app/pages/customervisit/customervisit.page.ts ***!
  \***********************************************************/
/*! exports provided: CustomervisitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomervisitPage", function() { return CustomervisitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customervisit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customervisit.page.html */ "gu1H");
/* harmony import */ var _customervisit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customervisit.page.scss */ "a6BE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages.service */ "Shlh");








let CustomervisitPage = class CustomervisitPage {
    constructor(formBuilder, auth, router, toastController) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.toastController = toastController;
        this.submitted = false;
        this.user_home = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).role == 'admin') ? '/dashboard' : '/orders';
        this.getuser = this.formBuilder.group({
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    ngOnInit() {
        /* this.auth.customerVisit({ date: "2021-08-08T02:37:36.836+05:30" }).subscribe((res) => {
          if (res.status != 0) {
            this.userList = res.response[0].documentData;
           
    
          } else {
            this.presentToast('No Record')
          }
        }) */
    }
    submit() {
        this.submitted = true;
        if (!this.getuser.valid) {
            this.presentToast('Date Required');
            return false;
        }
        else {
            this.auth.customerVisit(this.getuser.value).subscribe((res) => {
                if (res.status != 0) {
                    let data = res.response[0] ? res.response[0].documentData : [];
                    if (data.length > 0) {
                        this.userList = data;
                    }
                    else {
                        this.presentToast('No Record');
                    }
                }
                else {
                    this.presentToast('No Record');
                }
            });
        }
    }
};
CustomervisitPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _pages_service__WEBPACK_IMPORTED_MODULE_7__["PageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
CustomervisitPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customervisit',
        template: _raw_loader_customervisit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customervisit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomervisitPage);



/***/ })

}]);
//# sourceMappingURL=customervisit-customervisit-module-es2015.js.map