(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "/2RN":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "ea/W");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "6ckw");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "6ckw":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "spzo");
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss */ "ws6Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");








let DashboardPage = class DashboardPage {
    constructor(formBuilder, router, http, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.auth = auth;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
        this.submitted = false;
    }
    ngOnInit() {
        this.http.post(this.baseUrl + '/admin/dashboard', {}).subscribe(data => {
            if (data['response'] && data['response']) {
                this.todayOrder = data['response'].today;
                this.totalOrder = data['response'].total;
                this.todayValue = this.todayOrder[0] ? this.todayOrder[0]['totalAmount'] : 0;
                this.todaycount = this.todayOrder[0] ? this.todayOrder[0]['count'] : 0;
                this.todayAdvance = this.todayOrder[0] ? this.todayOrder[0]['advance'] : 0;
                this.todayBalance = this.todayOrder[0] ? this.todayOrder[0]['balance'] : 0;
                this.todaySettled = this.todayOrder[0] ? this.todayOrder[0]['count'] : 0;
                this.totalValue = this.totalOrder[0] ? this.totalOrder[0]['totalAmount'] : 0;
                this.totalcount = this.totalOrder[0] ? this.totalOrder[0]['count'] : 0;
            }
        });
    }
    getmenu() {
        console.log("getmenu");
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardPage);



/***/ }),

/***/ "ea/W":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "6ckw");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "spzo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\r\n\r\n    <ion-title>Blue Vision</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <!-- <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon> -->\r\n</ion-toolbar>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-header collapse=\"condense\">\r\n        <ion-toolbar>\r\n            <ion-title size=\"large\"></ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <div id=\"container\">\r\n\r\n        <div class=\"firstbox\">\r\n            <div class=\"today\">Today</div>\r\n            <div class=\"ordersvalue\">\r\n                <div class=\"orders\">Order<span style=\"display:block;margin-top:15px;\">{{todaycount}}</span>\r\n                </div>\r\n                <div class=\"orders\">Value<span style=\"display:block;margin-top:15px;\">₹ {{todayValue}}</span></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div id=\"container1\">\r\n\r\n        <div class=\"secondbox\">\r\n            <div class=\"todaypayment\">Today Payment</div>\r\n            <div class=\"ordersvalue2\">\r\n                <div class=\"orders1\">Advance<span style=\"display:block;margin-top:15px;\">₹ {{todayAdvance}}</span></div>\r\n                <div class=\"orders1\">Balance<span style=\"display:block;margin-top:15px;\">₹ {{todayBalance}}</span></div>\r\n                <div class=\"orders1\">Settled<span style=\"display:block;margin-top:15px;\">{{todaySettled}}</span></div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div id=\"container2\">\r\n\r\n        <div class=\"thirdbox\">\r\n            <div class=\"total\">Total</div>\r\n            <div class=\"ordersvalue4\">\r\n                <div class=\"orders2\">Orders<span style=\"display:block;margin-top:15px;\">{{totalcount}}</span></div>\r\n                <div class=\"orders2\">Value<span style=\"display:block;margin-top:15px;\">₹ {{totalValue}}</span></div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "ws6Y":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 75px;\n  --background: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);\n}\n\nion-menu-button {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n}\n\nion-title {\n  font-size: 28px;\n  margin-top: 12px;\n  text-align: center;\n  margin-left: 15px;\n  color: #fff;\n}\n\nion-icon {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n  margin-left: 12px;\n}\n\n/*..........Container.............*/\n\n#container {\n  margin-top: 15px;\n  font-size: 18px;\n}\n\n.firstbox {\n  text-align: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  background: red;\n}\n\n.firstbox .today {\n  padding: 10px 0;\n  color: #ffffff;\n  border-bottom: 1px solid white;\n}\n\n.firstbox .ordersvalue {\n  display: flex;\n  justify-content: center;\n}\n\n.firstbox .orders {\n  padding: 10px 80px;\n  color: white;\n}\n\n/*..........Container end.............*/\n\n/*..........Container1.............*/\n\n#container1 {\n  margin-top: 15px;\n  font-size: 18px;\n}\n\n.secondbox {\n  text-align: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  background: orange;\n}\n\n.secondbox .todaypayment {\n  padding: 10px 0;\n  color: #ffffff;\n  border-bottom: 1px solid white;\n}\n\n.secondbox .ordersvalue2 {\n  display: flex;\n  justify-content: center;\n}\n\n.secondbox .orders1 {\n  padding: 10px 30px;\n  color: white;\n}\n\n#container2 {\n  margin-top: 15px;\n  font-size: 18px;\n}\n\n.thirdbox {\n  text-align: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  background: green;\n}\n\n.thirdbox .total {\n  padding: 10px 0;\n  color: #ffffff;\n  border-bottom: 1px solid white;\n}\n\n.thirdbox .ordersvalue4 {\n  display: flex;\n  justify-content: center;\n}\n\n.thirdbox .orders2 {\n  padding: 10px 80px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlFQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0EsbUNBQUE7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFFSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFBUjs7QUFFSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUFSOztBQUVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQVI7O0FBS0EsdUNBQUE7O0FBR0Esb0NBQUE7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBTUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FBSlI7O0FBTUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFKUjs7QUFNSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUpSOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUxKOztBQU1JO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQUpSOztBQU1JO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBSlI7O0FBTUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFKUiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIDEzNWRlZywgIzUyRTVFNyAxMCUsICMxMzBDQjcgMTAwJSk7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcblxyXG4vKi4uLi4uLi4uLi5Db250YWluZXIuLi4uLi4uLi4uLi4uKi9cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmZpcnN0Ym94IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgLnRvZGF5IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLm9yZGVyc3ZhbHVlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm9yZGVycyB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA4MHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qLi4uLi4uLi4uLkNvbnRhaW5lciBlbmQuLi4uLi4uLi4uLi4uKi9cclxuXHJcblxyXG4vKi4uLi4uLi4uLi5Db250YWluZXIxLi4uLi4uLi4uLi4uLiovXHJcblxyXG4jY29udGFpbmVyMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc2Vjb25kYm94IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG4gICAgLnRvZGF5cGF5bWVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5vcmRlcnN2YWx1ZTIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAub3JkZXJzMSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuI2NvbnRhaW5lcjIge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRoaXJkYm94IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICAudG90YWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICB9XHJcbiAgICAub3JkZXJzdmFsdWU0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm9yZGVyczIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggODBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map