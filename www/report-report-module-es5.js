(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"], {
    /***/
    "+biH":
    /*!*********************************************!*\
      !*** ./src/app/pages/report/report.page.ts ***!
      \*********************************************/

    /*! exports provided: ReportPage */

    /***/
    function biH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportPage", function () {
        return ReportPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./report.page.html */
      "fqAJ");
      /* harmony import */


      var _report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./report.page.scss */
      "9Xvk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var ReportPage = /*#__PURE__*/function () {
        function ReportPage(formBuilder, router, http, auth, toastController) {
          _classCallCheck(this, ReportPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.http = http;
          this.auth = auth;
          this.toastController = toastController; // fileTransfer: FileTransferObject = this.transfer.create();

          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
          this.submitted = false;
          this.user_home = JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).role == 'admin' ? '/dashboard' : '/order';
        }

        _createClass(ReportPage, [{
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000,
                        position: 'top'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.orderForm = this.formBuilder.group({
              reportfor: [''],
              from: [''],
              to: ['']
            });
            /*
              this.http.post(this.baseUrl+ '/order/getorders', {}).subscribe(data => {
                if (data['response'] && data['response']) {
                  this.orderList = data['response'].data
                }
              }) */
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.orderForm.reset();
            this.orderList = [];
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            var count = 0;
            console.log("submit");

            for (var el in this.orderForm.controls) {
              console.log(this.orderForm.controls[el].value);

              if (this.orderForm.controls[el].value != 0) {
                count++;
              }
              /*  if (this.orderForm.controls[el].errors) {
                 console.log(el.split('_')[0], el.split('_')[1])
                 this.presentToast((el.split('_')[0] + ' ' + el.split('_')[1] ? el.split('_')[1] : '') + ' Required')
                 return;
               } */

            }

            if (count != 0) {
              this.http.post(this.baseUrl + '/order/orderReport', this.orderForm.value).subscribe(function (data) {
                console.log(data);

                if (data['status'] == 1 && data['response'] && data['response']) {
                  _this.orderList = data['response'].documentData; // this.orderList.resetForm()
                } else {
                  _this.presentToast('No Record Found');

                  _this.orderList = [];
                }
              });
            } else {
              this.presentToast('Select Any Options');
            }
          }
        }]);

        return ReportPage;
      }();

      ReportPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }];
      };

      ReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report',
        template: _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReportPage);
      /***/
    },

    /***/
    "9Xvk":
    /*!***********************************************!*\
      !*** ./src/app/pages/report/report.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function Xvk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  height: 75px;\n  --background: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);\n}\n\nion-menu-button {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n}\n\nion-title {\n  font-size: 28px;\n  margin-top: 12px;\n  text-align: center;\n  margin-left: 15px;\n  color: #fff;\n}\n\nion-icon {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n  margin-left: 12px;\n}\n\nion-item {\n  border: 1px solid #dcdcdc;\n  font-size: 13px;\n  --min-height: 0;\n}\n\nh2 {\n  text-align: center;\n  margin-top: 20%;\n}\n\n.form {\n  margin-top: 20px;\n}\n\n.dates {\n  margin-top: 20px;\n}\n\n.submitbtn {\n  margin-top: 30px;\n}\n\n.tablename {\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid #ddd;\n  background: #dcdcdc;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 30px;\n}\n\nth {\n  text-align: left;\n  padding: 10px 10px;\n  white-space: nowrap;\n  font-size: 15px;\n}\n\ntd {\n  text-align: center;\n  padding: 10px 10px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlFQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6InJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjNTJFNUU3IDEwJSwgIzEzMENCNyAxMDAlKTtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC0tbWluLWhlaWdodDogMDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZGF0ZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnN1Ym1pdGJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udGFibGVuYW1lIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "Q0Id":
    /*!***********************************************!*\
      !*** ./src/app/pages/report/report.module.ts ***!
      \***********************************************/

    /*! exports provided: ReportPageModule */

    /***/
    function Q0Id(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportPageModule", function () {
        return ReportPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./report-routing.module */
      "UYUb");
      /* harmony import */


      var _report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./report.page */
      "+biH");

      var ReportPageModule = function ReportPageModule() {
        _classCallCheck(this, ReportPageModule);
      };

      ReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportPageRoutingModule"]],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]]
      })], ReportPageModule);
      /***/
    },

    /***/
    "UYUb":
    /*!*******************************************************!*\
      !*** ./src/app/pages/report/report-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ReportPageRoutingModule */

    /***/
    function UYUb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportPageRoutingModule", function () {
        return ReportPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./report.page */
      "+biH");

      var routes = [{
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_3__["ReportPage"]
      }];

      var ReportPageRoutingModule = function ReportPageRoutingModule() {
        _classCallCheck(this, ReportPageRoutingModule);
      };

      ReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReportPageRoutingModule);
      /***/
    },

    /***/
    "fqAJ":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report/report.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function fqAJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar>\n    <ion-title>Blue Vision</ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-icon slot=\"start\" routerLink=\"{{user_home}}\" name=\"home\"></ion-icon>\n</ion-toolbar>\n\n<ion-content>\n    <form [formGroup]=\"orderForm\">\n\n        <div>\n            <h2>Reports</h2>\n        </div>\n        <div class=\"form ion-text-center\">\n            <ion-grid>\n                <ion-list>\n                    <ion-radio-group formControlName=\"reportfor\">\n                        <ion-row>\n                            <ion-col size=6>\n                                <ion-item>\n                                    <ion-label>Weekly Report</ion-label>\n                                    <ion-radio slot=\"start\" color=\"success\" value=\"Weekly Report\"></ion-radio>\n                                </ion-item>\n                            </ion-col>\n\n                            <ion-col size=6>\n                                <ion-item>\n                                    <ion-label>Monthly Report</ion-label>\n                                    <ion-radio slot=\"start\" color=\"success\" value=\"Monthly Report\"></ion-radio>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                    </ion-radio-group>\n                </ion-list>\n                <ion-row class=\"dates\">\n                    <ion-col size=6>\n                        <ion-item lines='none'>\n                            <ion-label position=\"floating\">Start Date</ion-label>\n                            <ion-datetime formControlName=\"from\"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col size=6>\n                        <ion-item lines='none'>\n                            <ion-label position=\"floating\">End Date</ion-label>\n                            <ion-datetime formControlName=\"to\"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-button class=\"submitbtn\" (click)=\"submit()\" size=\"medium\">Submit</ion-button>\n                <ion-button class=\"submitbtn\" (click)=\"resetForm()\" size=\"medium\">Reset</ion-button>\n            </ion-grid>\n            <div class=\"tablename\" style=\"overflow-x:auto;\">\n                <table>\n                    <tr>\n                        <th>Order number</th>\n                        <th>Order Date</th>\n                        <th>Customer Name</th>\n                        <th>Cus Phone No</th>\n                        <th>Lens Type</th>\n                        <th>Lens Price</th>\n                        <th>Lens Brand</th>\n                        <th>Frame Type</th>\n                        <th>Frame Price</th>\n                        <!-- <th>Frame Brand</th> -->\n                        <th>Total Amount</th>\n                        <th>Order Taken By</th>\n                    </tr>\n                    <tr *ngFor=\"let order of orderList\">\n                        <td>{{order.order_id}}</td>\n                        <td>{{order.created | date:'fullDate'}}</td>\n                        <td>{{order.customer_name}}</td>\n                        <td>{{order.customer_phone}}</td>\n                        <td>{{order.lens_type}}</td>\n                        <td>{{order.lens_price}}</td>\n                        <td>{{order.frame_brand}}</td>\n                        <td>{{order.frame_type}}</td>\n                        <td>{{order.frame_price}}</td>\n                        <!-- <td>{{order.brans}}</td> -->\n                        <td>{{order.total_amount}}</td>\n                        <td>{{order.employee_id? order.employee_id.username : '---'}}</td>\n\n                </table>\n            </div>\n        </div>\n    </form>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-report-module-es5.js.map