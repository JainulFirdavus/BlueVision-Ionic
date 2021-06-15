(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"ion-text-center\">\r\n        <img class=\"img1\" src=\"assets/img/opticals.jpg\">\r\n        <p>Blue Vision</p>\r\n\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"form ion-text-center\">\r\n            <h2 [style.color]=\"'#43b8ed'\">Sign in</h2>\r\n\r\n\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\r\n\r\n                <!--     <ion-item lines='none'>\r\n                    <ion-input inputmode=\"text\" formControlName=\"name\"></ion-input>\r\n                </ion-item>\r\n\r\n\r\n                <div *ngFor=\"let error of errorMessages.name\">\r\n                    <p [ngStyle]=\"{'color': 'red','font-size':'10px' }\"> {{error.type | json}} </p>\r\n                    <p [ngStyle]=\"{'color': 'red','font-size':'10px' }\"> {{(name.dirty || name.touched)}} </p>\r\n                    <ng-container *ngIf=\"name.hasError(error.type) && (name.dirty || name.touched)\">\r\n                        <small class=\"error-message\" [ngStyle]=\"{'color': 'red'}\">{{error.message}}</small>\r\n                    </ng-container>\r\n                </div> -->\r\n\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Email</ion-label>\r\n                    <ion-input inputmode=\"email\" formControlName=\"email\"></ion-input>\r\n                </ion-item>\r\n                <div *ngFor=\"let error of errorMessages.email\">\r\n                    <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\r\n                        <small class=\"error-message\" [ngStyle]=\"{'color': 'red'}\">{{error.message}}</small>\r\n                    </ng-container>\r\n                </div>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Password</ion-label>\r\n                    <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n                </ion-item>\r\n                <div *ngFor=\"let error of errorMessages.password\">\r\n                    <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || password.touched)\">\r\n                        <small class=\"error-message\" [ngStyle]=\"{'color': 'red'}\">{{error.message}}</small>\r\n                    </ng-container>\r\n                </div>\r\n\r\n                <!-- <ion-item lines='none'>\r\n                    <ion-input placeholder='Password'></ion-input>\r\n                </ion-item> -->\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-button [disabled]=\"!loginForm.valid\" type=\"submit\" expand=\"round\">SIGN IN</ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <!--  <ion-col size=6>\r\n                            <ion-button [disabled]=\"!loginForm.valid\" type=\"submit\" shape=\"round\">SIGN IN</ion-button>\r\n                        </ion-col> -->\r\n                        <!--   <ion-col size=6>\r\n                            <ion-button shape=\"round\" (click)=\"gotoHome()\">SIGN UP</ion-button>\r\n                        </ion-col> -->\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </form>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var _providers_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../providers/auth */
      "KApT");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomePageRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
        providers: [_providers_auth__WEBPACK_IMPORTED_MODULE_6__["AuthProvider"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: lato;\n}\n\nion-content {\n  --background: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);\n}\n\n@keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.container {\n  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  min-height: 300px;\n  width: 100%;\n  background-color: white;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.img1 {\n  margin-top: 80px;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\np {\n  color: #fff;\n  text-align: center;\n  font-size: 35px;\n}\n\nion-button {\n  --background: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);\n  margin-top: 30px;\n  font-size: 18px;\n}\n\n.form {\n  padding: 10px;\n}\n\n.form ion-item {\n  border-style: solid;\n  border-radius: 10px;\n  border-width: 2px;\n  border-color: grey;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksaUJBQUE7QUFDUjs7QUFFSTtFQUNJLGlFQUFBO0FBQ1I7O0FBZUk7RUFDSTtJQUVJLDZCQUFBO0lBQ0EsVUFBQTtFQUFWO0VBRU07SUFFSSx3QkFBQTtJQUNBLFVBQUE7RUFBVjtBQUNGOztBQUdJO0VBRUkseUVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFEUjs7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURSOztBQUlJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURSOztBQUlJO0VBQ0ksaUVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFEUjs7QUFJSTtFQUNJLGFBQUE7QUFEUjs7QUFFUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBWiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAqIHtcclxuICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCAxMzVkZWcsICM1MkU1RTcgMTAlLCAjMTMwQ0I3IDEwMCUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwcHgpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIHNsaWRlLWluLWJvdHRvbSB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLWJvdHRvbSAuNXMgY3ViaWMtYmV6aWVyKC4yNSwgLjQ2LCAuNDUsIC45NCkgYm90aDtcclxuICAgICAgICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbSAuNXMgY3ViaWMtYmV6aWVyKC4yNSwgLjQ2LCAuNDUsIC45NCkgYm90aDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWcxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCAxMzVkZWcsICM1MkU1RTcgMTAlLCAjMTMwQ0I3IDEwMCUpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ== */";
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _providers_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../providers/auth */
      "KApT");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(formBuilder, auth, router, toastController, AppService) {
          _classCallCheck(this, HomePage);

          this.formBuilder = formBuilder;
          this.auth = auth;
          this.router = router;
          this.toastController = toastController;
          this.AppService = AppService;
          this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.submitted = false;
          this.errorMessages = {
            password: [{
              type: 'required',
              message: 'Name is required'
            }, // { type: 'maxlength', message: 'Name cant be longer than 100 characters' },
            {
              type: 'pattern',
              message: 'Not Valid Email'
            }],
            email: [{
              type: 'required',
              message: 'Email is required'
            }, {
              type: 'minLength',
              message: 'Please enter a min 4 letter'
            }]
          };
          this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4)]]
          });
        }

        _createClass(HomePage, [{
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
                        duration: 2000
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
          /*  fireEvent() {
             this.childEvent.emit('hai')
           } */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('token')) {
              var uses = JSON.parse(localStorage.getItem('token')); // this.childEvent.emit('hai')

              console.log(uses.role);
              this.AppService.stringSubject.next(uses.role);

              if (uses.token) {
                if (uses.role == 'admin') {
                  this.router.navigate(['/dashboard']);
                } else {
                  this.router.navigate(['/orderform']);
                }
              }
            }
          }
        }, {
          key: "password",
          get: function get() {
            return this.loginForm.get("password");
          }
        }, {
          key: "email",
          get: function get() {
            return this.loginForm.get("email");
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            this.submitted = true;

            if (!this.loginForm.valid) {
              return false;
            } else {
              this.auth.login(this.loginForm.value).subscribe(function (response) {
                if (response && response.status == 1) {
                  // this.presentToast(response['status'])
                  _this.AppService.stringSubject.next(response.response.role);

                  if (response.response.role == 'admin') {
                    _this.router.navigate(['/dashboard']);
                  } else {
                    _this.router.navigate(['/orders']);
                  }
                } else {
                  _this.presentToast('invalid details');
                }
              });
            }
          }
        }, {
          key: "gotoHome",
          value: function gotoHome() {
            this.router.navigate(['/createaccount']); // define your component where you want to go
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _providers_auth__WEBPACK_IMPORTED_MODULE_8__["AuthProvider"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]
        }];
      };

      HomePage.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['parentData']
        }],
        childEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map