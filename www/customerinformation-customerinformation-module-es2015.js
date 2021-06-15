(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerinformation-customerinformation-module"],{

/***/ "1eRj":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/customerinformation/customerinformation-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerinformationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerinformationPageRoutingModule", function() { return CustomerinformationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customerinformation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerinformation.page */ "C4D9");




const routes = [
    {
        path: '',
        component: _customerinformation_page__WEBPACK_IMPORTED_MODULE_3__["CustomerinformationPage"]
    }
];
let CustomerinformationPageRoutingModule = class CustomerinformationPageRoutingModule {
};
CustomerinformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerinformationPageRoutingModule);



/***/ }),

/***/ "C4D9":
/*!***********************************************************************!*\
  !*** ./src/app/pages/customerinformation/customerinformation.page.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerinformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerinformationPage", function() { return CustomerinformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customerinformation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customerinformation.page.html */ "qQgI");
/* harmony import */ var _customerinformation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customerinformation.page.scss */ "o9m8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages.service */ "Shlh");








let CustomerinformationPage = class CustomerinformationPage {
    constructor(formBuilder, auth, router, toastController) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.toastController = toastController;
        this.submitted = false;
        this.user_home = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).role == 'admin') ? '/dashboard' : '/orders';
        this.getuser = this.formBuilder.group({
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
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
        /*  this.auth.customerDetails({ phone: '9597070570' }).subscribe((res) => {
       
           this.userList = res.response;
     
         }) */
    }
    submit() {
        this.submitted = true;
        if (!this.getuser.valid) {
            this.presentToast('Phone Number required.');
            return false;
        }
        else {
            this.auth.userorderList(this.getuser.value).subscribe((res) => {
                if (res.status == 0) {
                    this.presentToast('No Record');
                }
                else {
                    this.userList = res.response;
                }
            });
        }
    }
};
CustomerinformationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _pages_service__WEBPACK_IMPORTED_MODULE_7__["PageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
CustomerinformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customerinformation',
        template: _raw_loader_customerinformation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customerinformation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerinformationPage);



/***/ }),

/***/ "o9m8":
/*!*************************************************************************!*\
  !*** ./src/app/pages/customerinformation/customerinformation.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 75px;\n  --background: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);\n}\n\nion-menu-button {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n}\n\nion-title {\n  font-size: 28px;\n  margin-top: 12px;\n  text-align: center;\n  margin-left: 15px;\n  color: #fff;\n}\n\nion-icon {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n  margin-left: 12px;\n}\n\nion-item {\n  border: 1px solid grey;\n  font-size: 16px;\n  margin: 30px 40px;\n  color: #000;\n}\n\nion-item.item-has-focus > ion-label {\n  color: #000 !important;\n}\n\nion-button {\n  margin-top: 20px;\n  width: 30%;\n  color: #000;\n  --background: #52E5E7;\n}\n\nh2 {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.form {\n  margin-top: 20%;\n}\n\n.tablename {\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid #ddd;\n  background: #dcdcdc;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nth {\n  text-align: left;\n  padding: 10px 10px;\n  white-space: nowrap;\n  font-size: 15px;\n}\n\ntd {\n  text-align: center;\n  padding: 10px 10px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjdXN0b21lcmluZm9ybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpRUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREoiLCJmaWxlIjoiY3VzdG9tZXJpbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjNTJFNUU3IDEwJSwgIzEzMENCNyAxMDAlKTtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMzBweCA0MHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtLml0ZW0taGFzLWZvY3VzPmlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1MkU1RTc7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuXHJcblxyXG4udGFibGVuYW1lIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59Il19 */");

/***/ }),

/***/ "qQgI":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customerinformation/customerinformation.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\r\n\r\n    <ion-title>Blue Vision</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-icon slot=\"start\" routerLink=\"{{user_home}}\"  name=\"home\"></ion-icon>\r\n</ion-toolbar>\r\n<ion-content>\r\n\r\n    <h2>Customer Information</h2>\r\n\r\n    <form [formGroup]=\"getuser\" (ngSubmit)=\"submit()\">\r\n        <div class=\"form ion-text-center\">\r\n            <ion-item lines='none'>\r\n                <ion-label position=\"floating\">Phone No</ion-label>\r\n                <ion-input inputmode=\"text\" formControlName=\"phone\" required></ion-input>\r\n            </ion-item>\r\n            <ion-button class=\"cancelbtn\" type=\"submit\" size=\"medium\">Submit</ion-button>\r\n        </div>\r\n\r\n    </form>\r\n    <div class=\"tablename\" style=\"overflow-x:auto;\" *ngIf=\"userList\">\r\n        <!-- {{userList | json}} -->\r\n        <table>\r\n            <tr>\r\n                <th>order Date</th>\r\n                <th>order Id</th>\r\n                <th>Name</th>\r\n                <th>Phone On</th>\r\n                <th>address</th>\r\n                <th>Next Visit</th>\r\n                <th>Total</th>\r\n                <th>Status</th>\r\n                <!--   <th>Advance</th> -->\r\n\r\n            </tr>\r\n            <!-- {{userList |json}} -->\r\n            <tr *ngFor=\"let user of userList\">\r\n                <td>{{user.order_date| date:'fullDate'}}</td>\r\n                <td>{{user.order_id}}</td>\r\n                <td>{{user.customer_name}}</td>\r\n                <td>{{user.customer_phone}}</td>\r\n                <td>{{user.customer_address}}</td>\r\n                <td>{{user.next_visit | date:'fullDate'}}</td>\r\n                <td>₹ {{user.total_amount}}</td>\r\n                <td>{{user.status}}</td>\r\n\r\n                <!--  <td>{{userList.upcomming_visit.vistedDate | date:'fullDate'}}</td>\r\n                    <td>{{userList.visitng[0].last_visit | date:'fullDate'}}</td>\r\n                    <td>{{userList.upcomming_visit[0].next_visit | date:'fullDate'}}</td> -->\r\n                <!--    <td>{{userList.grand_total}}</td>\r\n                    <td>{{userList.discount}}</td> -->\r\n\r\n            </tr>\r\n        </table>\r\n\r\n        <!-- <div *ngIf=\"userList\">\r\n            <h4>No Recorrd Found</h4>\r\n        </div>\r\n -->\r\n\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "x8+w":
/*!*************************************************************************!*\
  !*** ./src/app/pages/customerinformation/customerinformation.module.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerinformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerinformationPageModule", function() { return CustomerinformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _customerinformation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerinformation-routing.module */ "1eRj");
/* harmony import */ var _customerinformation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customerinformation.page */ "C4D9");







let CustomerinformationPageModule = class CustomerinformationPageModule {
};
CustomerinformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customerinformation_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerinformationPageRoutingModule"]
        ],
        declarations: [_customerinformation_page__WEBPACK_IMPORTED_MODULE_6__["CustomerinformationPage"]]
    })
], CustomerinformationPageModule);



/***/ })

}]);
//# sourceMappingURL=customerinformation-customerinformation-module-es2015.js.map