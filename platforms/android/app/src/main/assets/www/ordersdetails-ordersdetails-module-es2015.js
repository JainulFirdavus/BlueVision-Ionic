(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordersdetails-ordersdetails-module"],{

/***/ "Fjhy":
/*!*************************************************************!*\
  !*** ./src/app/pages/ordersdetails/ordersdetails.module.ts ***!
  \*************************************************************/
/*! exports provided: OrdersdetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersdetailsModule", function() { return OrdersdetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ordersdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordersdetails.component */ "lHCT");
/* harmony import */ var _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderdetails.routing.module */ "yYBc");







let OrdersdetailsModule = class OrdersdetailsModule {
};
OrdersdetailsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ordersdetails_component__WEBPACK_IMPORTED_MODULE_5__["OrdersdetailsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrdersdetailsPageRoutingModule"]
        ],
    })
], OrdersdetailsModule);



/***/ }),

/***/ "UPCj":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ordersdetails/ordersdetails.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\r\n  <ion-title>Blue Vision</ion-title>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-menu-button></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-icon slot=\"start\" routerLink=\"{{user_home}}\" name=\"home\"></ion-icon>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <div>\r\n    <h2>Order - {{order_id}} </h2>\r\n  </div>\r\n  <div class=\"orders\"></div>\r\n  <form [formGroup]=\"orderForm\">\r\n\r\n    <div class=\"form ion-text-center\">\r\n      <!-- <ion-item class=\"orderform\" lines='none'>\r\n        <ion-label position=\"floating\">Order Number</ion-label>\r\n        <ion-input placeholder='DG-00001'></ion-input>\r\n      </ion-item> -->\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=5>\r\n            <ion-item lines='none'>\r\n              <ion-label position=\"floating\">Order Date</ion-label>\r\n              <ion-datetime formControlName=\"order_date\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=2>\r\n          </ion-col>\r\n          <ion-col size=5>\r\n            <ion-item lines='none'>\r\n              <ion-label position=\"floating\">Delivery Date</ion-label>\r\n              <ion-datetime formControlName=\"delivery_date\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=12>\r\n            <ion-item lines='none'>\r\n              <ion-label position=\"floating\">Name</ion-label>\r\n              <ion-input formControlName=\"customer_name\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=8>\r\n            <ion-item lines='none'>\r\n              <ion-label position=\"floating\">Phone</ion-label>\r\n              <ion-input formControlName=\"customer_phone\" placeholder='+91 1234567890'></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=12>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Address</ion-label>\r\n              <ion-textarea formControlName=\"customer_address\"></ion-textarea>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=4>\r\n            <ion-item class=\"amount\" lines='none'>\r\n              <ion-label position=\"floating\">Total Amount</ion-label>\r\n              <ion-input placeholder=\"0\" formControlName=\"total_amount\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=5>\r\n            <ion-item lines='none'>\r\n              <ion-label position=\"floating\">Discount Value</ion-label>\r\n              <ion-input placeholder=\"0\" formControlName=\"discount\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=3>\r\n            <ion-item lines='none'>\r\n              <ion-label position=\"floating\">Advance</ion-label>\r\n              <ion-input placeholder=\"0\" formControlName=\"advance\" (ngModelChange)=\"updateCalc()\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=4>\r\n            <ion-item class=\"amount\" lines='none'>\r\n              <ion-label position=\"floating\">Balance</ion-label>\r\n              <ion-input placeholder=\"0\" formControlName=\"balance\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=3>\r\n            <ion-item class=\"amount\" lines='none'>\r\n              <ion-label position=\"floating\">Paid</ion-label>\r\n              <ion-select formControlName=\"paid_status\">\r\n                <ion-select-option value=\"Paid\">Paid</ion-select-option>\r\n                <ion-select-option value=\"Not\">Not</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <!-- <ion-col size=2></ion-col> -->\r\n          <ion-col size=5>\r\n            <ion-item class=\"select\" lines='none'>\r\n              <ion-label position=\"floating\">Delivered Status</ion-label>\r\n              <ion-select formControlName=\"delivery_status\">\r\n                <ion-select-option value=\"Pending\">Pending</ion-select-option>\r\n                <ion-select-option value=\"Fitting\">Fitting</ion-select-option>\r\n                <ion-select-option value=\"Ready\">Ready to Deliver</ion-select-option>\r\n                <ion-select-option value=\"Delivered\">Delivered</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=3>\r\n            <ion-button class=\"cancelbtn\" routerLink=\"/orders\" size=\"medium\">Cancel</ion-button>\r\n          </ion-col>\r\n          <ion-col size=2></ion-col>\r\n          <ion-col size=7>\r\n            <ion-button class=\"savebtn\" (click)=\"submit()\" size=\"medium\">Save & Print</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n\r\n    </div>\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ "Wvf1":
/*!******************************************************************!*\
  !*** ./src/app/pages/ordersdetails/ordersdetails.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 75px;\n  --background: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);\n}\n\nion-menu-button {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n}\n\nion-title {\n  font-size: 28px;\n  margin-top: 12px;\n  text-align: center;\n  margin-left: 15px;\n  color: #fff;\n}\n\nion-icon {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlcnNkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlFQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoib3JkZXJzZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCAxMzVkZWcsICM1MkU1RTcgMTAlLCAjMTMwQ0I3IDEwMCUpO1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "lHCT":
/*!****************************************************************!*\
  !*** ./src/app/pages/ordersdetails/ordersdetails.component.ts ***!
  \****************************************************************/
/*! exports provided: OrdersdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersdetailsComponent", function() { return OrdersdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ordersdetails_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ordersdetails.component.html */ "UPCj");
/* harmony import */ var _ordersdetails_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordersdetails.component.scss */ "Wvf1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let OrdersdetailsComponent = class OrdersdetailsComponent {
    constructor(formBuilder, router, http, route, toastController) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.route = route;
        this.toastController = toastController;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
        this.user_home = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).role == 'admin') ? '/dashboard' : '/order';
        this.submitted = false;
        this.route.queryParams.subscribe(params => {
            if (params && params.id) {
                this.id = params.id;
            }
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    ngOnInit() {
        this.orderForm = this.formBuilder.group({
            order_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            created: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            advance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            balance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            customer_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            customer_age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            customer_gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            customer_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            customer_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            delivery_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            total_amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            delivery_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            discount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            paid_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.http.post(this.baseUrl + '/order/getordeById', { _id: this.id }).subscribe(data => {
            if (data['response']) {
                this.order_id = data['response'].order_id;
                this.orderForm.patchValue({
                    _id: data['response']._id,
                    advance: data['response'].advance,
                    balance: data['response'].balance,
                    customer_address: data['response'].customer_address,
                    customer_age: data['response'].customer_age,
                    customer_gender: data['response'].customer_gender,
                    customer_name: data['response'].customer_name,
                    customer_phone: data['response'].customer_phone,
                    delivery_date: new Date(data['response'].delivery_date).toISOString(),
                    total_amount: data['response'].total_amount,
                    delivery_status: data['response'].delivery_status,
                    discount: data['response'].discount,
                    order_date: new Date(data['response'].order_date).toISOString(),
                    paid_status: data['response'].paid_status
                });
            }
        });
    }
    updateCalc() {
        this.orderForm.patchValue({
            total_amount: 0
        });
    }
    submit() {
        this.http.post(this.baseUrl + '/order/save', this.orderForm.value).subscribe(data => {
            if (data['response'] && data['response']) {
                this.router.navigate(['/orders']).then(() => {
                    window.location.reload();
                });
                ;
                this.presentToast('Order Updated');
            }
            else {
                this.presentToast('invalid details');
            }
        });
    }
};
OrdersdetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] }
];
OrdersdetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ordersdetails',
        template: _raw_loader_ordersdetails_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ordersdetails_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersdetailsComponent);



/***/ }),

/***/ "yYBc":
/*!********************************************************************!*\
  !*** ./src/app/pages/ordersdetails/orderdetails.routing.module.ts ***!
  \********************************************************************/
/*! exports provided: OrdersdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersdetailsPageRoutingModule", function() { return OrdersdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ordersdetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordersdetails.component */ "lHCT");




const routes = [
    {
        path: '',
        component: _ordersdetails_component__WEBPACK_IMPORTED_MODULE_3__["OrdersdetailsComponent"]
    }
];
let OrdersdetailsPageRoutingModule = class OrdersdetailsPageRoutingModule {
};
OrdersdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersdetailsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=ordersdetails-ordersdetails-module-es2015.js.map