(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "8veL":
/*!*******************************************************!*\
  !*** ./src/app/pages/orders/orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "Ep+G");




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "Ep+G":
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders.page.html */ "iVDW");
/* harmony import */ var _orders_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.page.scss */ "F6Pd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File } from '@ionic-native/file';
let OrdersPage = class OrdersPage {
    constructor(formBuilder, router, http, auth, toastController /* private transfer: FileTransfer, private file: File */) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.auth = auth;
        this.toastController = toastController;
        // fileTransfer: FileTransferObject = this.transfer.create();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
        this.submitted = false;
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
        this.orderForm = this.formBuilder.group({
            delivery_status: [''],
            customer: [''], date: [''],
        });
        this.http.post(this.baseUrl + '/order/getorders', {}).subscribe(data => {
            if (data['response'] && data['response']) {
                this.orderList = data['response'].data;
            }
        });
    }
    resetForm() {
        this.orderForm.reset();
        // this.orderList = []
        this.http.post(this.baseUrl + '/order/getorders', this.orderForm.value).subscribe(data => {
            if (data['response'] && data['response']) {
                this.orderList = data['response'].data;
            }
        });
    }
    search() {
        this.http.post(this.baseUrl + '/order/getorders', this.orderForm.value).subscribe(data => {
            if (data['response'] && data['response']) {
                this.orderList = data['response'].data;
            }
        });
    }
    export() {
        this.http.post(this.baseUrl + '/order/orderExport', this.orderForm.value).subscribe(data => {
            if (data['response'] && data['status'] == 1) {
                this.presentToast('Report Send Your E-Mail');
                console.log(data['response']);
                /*  const url = 'http://www.example.com/file.pdf';
                 this.fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
                 }, (error) => {
                   // handle error
                 }); */
            }
            else {
                this.presentToast(data['response']);
            }
        });
    }
    getdetails(value) {
        let navigationExtras = {
            queryParams: {
                id: value
            }
        };
        this.router.navigate(['ordersdetails'], navigationExtras);
        // this.router.navigate(['/ordersdetails']);
        /* this.http.post(this.baseUrl+ '/order/getordeById', { _id: value }).subscribe(data => {
          if (data['response'] && data['response']) {
            this.orderList = data['response'].data
    
          }
        }) */
    }
};
OrdersPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders',
        template: _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersPage);



/***/ }),

/***/ "F6Pd":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 75px;\n  --background: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);\n}\n\nion-menu-button {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n}\n\nion-title {\n  font-size: 28px;\n  margin-top: 12px;\n  text-align: center;\n  margin-left: 15px;\n  color: #fff;\n}\n\nion-icon {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n  margin-left: 12px;\n}\n\nion-item {\n  border: 1px solid #dcdcdc;\n  font-size: 13px;\n}\n\nh2 {\n  margin-left: 10px;\n}\n\n.circle {\n  color: #000;\n}\n\n.orders {\n  border-bottom: 1px solid #dcdcdc;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.select {\n  margin-top: 20px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.search {\n  --background: #52E5E7;\n  color: #000;\n}\n\n.export {\n  --background: linear-gradient( 135deg, #52E5E7 40%, #130CB7 100%);\n  color: #000;\n}\n\n.reset {\n  --background: #dcdcdc;\n  color: #000;\n}\n\n.search1 {\n  color: #000;\n  font-weight: 600;\n}\n\n.tablename {\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid #ddd;\n  background: #dcdcdc;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nth {\n  text-align: left;\n  padding: 10px 10px;\n  white-space: nowrap;\n  font-size: 15px;\n}\n\ntd {\n  text-align: center;\n  padding: 10px 10px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.order {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlFQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFPQTtFQUNJLGlCQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0FBSko7O0FBT0E7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0E7RUFDSSxpRUFBQTtFQUNBLFdBQUE7QUFKSjs7QUFPQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNJLHlCQUFBO0FBSko7O0FBT0E7RUFDSSxrQkFBQTtBQUpKIiwiZmlsZSI6Im9yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjNTJFNUU3IDEwJSwgIzEzMENCNyAxMDAlKTtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLy8gaW9uLWJ1dHRvbiB7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuLy8gfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5oMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLm9yZGVycyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1MkU1RTc7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmV4cG9ydCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjNTJFNUU3IDQwJSwgIzEzMENCNyAxMDAlKTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4ucmVzZXQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZGNkY2RjO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5zZWFyY2gxIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRhYmxlbmFtZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2RjZGNkYztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuLm9yZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "Xlj8":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "8veL");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "Ep+G");







let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "iVDW":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\r\n\r\n    <ion-title>Blue Vision</ion-title>\r\n\r\n    <ion-icon slot=\"end\" name=\"add-circle-outline\" routerLink=\"/orderform\" routerDirection=\"root\"></ion-icon>\r\n\r\n    <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <!-- <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon> -->\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n    <div>\r\n        <h2>Orders</h2>\r\n    </div>\r\n    <div class=\"orders\"></div>\r\n    <div class=\"form ion-text-center\">\r\n        <form [formGroup]=\"orderForm\">\r\n\r\n            <ion-item class=\"select\" lines='none'>\r\n                <ion-label>Filler by status</ion-label>\r\n                <ion-select formControlName=\"delivery_status\">\r\n                    <ion-select-option value=\"pending\">Pending</ion-select-option>\r\n                    <ion-select-option value=\"fitting\">Fitting</ion-select-option>\r\n                    <ion-select-option value=\"ready\">Ready to Deliver</ion-select-option>\r\n                    <ion-select-option value=\"delivered\">Delivered</ion-select-option>\r\n                </ion-select>\r\n\r\n            </ion-item>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=6>\r\n                        <ion-item lines='none'>\r\n                            <ion-input placeholder='Order No/Customer info' formControlName=\"customer\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=6>\r\n                        <ion-item lines='none'>\r\n                            <ion-input type=\"date\" formControlName=\"date\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=4>\r\n                        <ion-button class=\"search\" (click)=\"search()\" size=small>Search</ion-button>\r\n                    </ion-col>\r\n                    <ion-col size=4>\r\n                        <ion-button class=\"export\" (click)=\"export()\" size=small>Export</ion-button>\r\n                    </ion-col>\r\n                    <ion-col size=4>\r\n                        <ion-button class=\"reset\"  (click)=\"resetForm()\" size=small>Reset</ion-button>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n            </ion-grid>\r\n        </form>\r\n\r\n\r\n        <div class=\"tablename\" style=\"overflow-x:auto;\">\r\n            <table>\r\n                <tr>\r\n                    <th>Order ID</th>\r\n                    <th>Order On</th>\r\n                    <th class=\"order\">Customer Name</th>\r\n                    <th>Price</th>\r\n                    <th>Discount</th>\r\n                    <th>Advance</th>\r\n                    <th>Balance</th>\r\n                    <th>Status</th>\r\n                    <!-- <th>Action</th> -->\r\n                </tr>\r\n                <tr *ngFor=\"let order of orderList\">\r\n                    <td>{{order.order_id}}</td>\r\n                    <td>{{order.created | date:'fullDate'}}</td>\r\n                    <td>{{order.customer_name}}</td>\r\n                    <td>₹ {{order.total_amount}}</td>\r\n                    <td>₹ {{order.discount}}</td>\r\n                    <td>₹ {{order.advance}}</td>\r\n                    <td>₹ {{order.balance}}</td>\r\n                    <td>{{order.delivery_status}}</td>\r\n                    <td>\r\n                        <ion-button class=\"export\" (click)=\"getdetails(order._id)\" size=small>click</ion-button>\r\n                    </td>\r\n\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map