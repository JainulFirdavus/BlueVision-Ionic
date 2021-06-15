(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newemployee-newemployee-module"],{

/***/ "EF2m":
/*!*****************************************************************!*\
  !*** ./src/app/pages/newemployee/newemployee-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: newEmployeePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newEmployeePageRoutingModule", function() { return newEmployeePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _newemployee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newemployee.component */ "G3OR");




const routes = [
    {
        path: '',
        component: _newemployee_component__WEBPACK_IMPORTED_MODULE_3__["NewemployeeComponent"]
    }
];
let newEmployeePageRoutingModule = class newEmployeePageRoutingModule {
};
newEmployeePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], newEmployeePageRoutingModule);



/***/ }),

/***/ "G3OR":
/*!************************************************************!*\
  !*** ./src/app/pages/newemployee/newemployee.component.ts ***!
  \************************************************************/
/*! exports provided: NewemployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewemployeeComponent", function() { return NewemployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_newemployee_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./newemployee.component.html */ "tqCt");
/* harmony import */ var _newemployee_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newemployee.component.scss */ "ooB/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let NewemployeeComponent = class NewemployeeComponent {
    constructor(formBuilder, router, http, route, toastController) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.route = route;
        this.toastController = toastController;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
        this.user_home = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).role == 'admin') ? '/dashboard' : '/orders';
        this.submitted = false;
        this.errorMessages = {
            password: [
                { type: 'required', message: 'Password is required' },
                // { type: 'maxlength', message: 'Name cant be longer than 100 characters' },
                { type: 'pattern', message: 'Not Valid Email' }
            ],
            /*   confirmpass: [
                { type: 'required', message: 'Name is required' },
                // { type: 'maxlength', message: 'Name cant be longer than 100 characters' },
                { type: 'pattern', message: 'Not Valid Email' }
              ], */
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'minLength', message: 'Please enter a min 4 letter' }
            ],
            phone: [
                { type: 'required', message: 'phone is required' },
                { type: 'minLength', message: 'Please enter a min 10 numbers' }
            ],
            username: [
                { type: 'required', message: 'Name is required' },
                { type: 'minLength', message: 'Please enter a min 4 letter' }
            ],
        };
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
        this.employeeForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4)]],
            role: [false],
        });
    }
    get password() {
        return this.employeeForm.get("password");
    }
    /*  get confirmpass() {
       return this.employeeForm.get("confirmpass");
     } */
    get email() {
        return this.employeeForm.get("email");
    }
    get phone() {
        return this.employeeForm.get("phone");
    }
    get username() {
        return this.employeeForm.get("username");
    }
    get role() {
        return this.employeeForm.get("role");
    }
    onSubmit() {
        this.http.post(this.baseUrl + '/employee/register', this.employeeForm.value).subscribe(response => {
            if (response['response'].status == 1) {
                // this.router.navigate(['/home']);
                this.employeeForm.reset();
                /*   this.employeeForm.patchValue({
          
                  }) */
                this.router.navigate(['/dashboard']);
                this.toastController.create({
                    message: 'Account Created Successfully',
                });
            }
            else {
                this.toastController.create({
                    message: 'Invalid Credentials',
                });
            }
        });
    }
};
NewemployeeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] }
];
NewemployeeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newemployee',
        template: _raw_loader_newemployee_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newemployee_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewemployeeComponent);



/***/ }),

/***/ "lnWm":
/*!*********************************************************!*\
  !*** ./src/app/pages/newemployee/newemployee.module.ts ***!
  \*********************************************************/
/*! exports provided: newEmployeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newEmployeePageModule", function() { return newEmployeePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _newemployee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newemployee-routing.module */ "EF2m");
/* harmony import */ var _newemployee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newemployee.component */ "G3OR");







let newEmployeePageModule = class newEmployeePageModule {
};
newEmployeePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _newemployee_routing_module__WEBPACK_IMPORTED_MODULE_5__["newEmployeePageRoutingModule"]
        ],
        declarations: [_newemployee_component__WEBPACK_IMPORTED_MODULE_6__["NewemployeeComponent"]]
    })
], newEmployeePageModule);



/***/ }),

/***/ "ooB/":
/*!**************************************************************!*\
  !*** ./src/app/pages/newemployee/newemployee.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 75px;\n  --background: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);\n}\n\nion-menu-button {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n}\n\nion-title {\n  font-size: 28px;\n  margin-top: 12px;\n  text-align: center;\n  margin-left: 15px;\n  color: #fff;\n}\n\nion-icon {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n  margin-left: 12px;\n}\n\nion-item {\n  border: 1px solid grey;\n  font-size: 16px;\n  margin: 30px 40px;\n  color: #000;\n}\n\nion-item.item-has-focus > ion-label {\n  color: #000 !important;\n}\n\nion-button {\n  margin-top: 20px;\n  width: 30%;\n  color: #000;\n  --background: #52E5E7;\n}\n\nh2 {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.form {\n  margin-top: 20%;\n}\n\n.tablename {\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid #ddd;\n  background: #dcdcdc;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nth {\n  text-align: left;\n  padding: 10px 10px;\n  white-space: nowrap;\n  font-size: 15px;\n}\n\ntd {\n  text-align: center;\n  padding: 10px 10px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuZXdlbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpRUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREoiLCJmaWxlIjoibmV3ZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjNTJFNUU3IDEwJSwgIzEzMENCNyAxMDAlKTtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMzBweCA0MHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtLml0ZW0taGFzLWZvY3VzPmlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1MkU1RTc7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuXHJcblxyXG4udGFibGVuYW1lIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59Il19 */");

/***/ }),

/***/ "tqCt":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newemployee/newemployee.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-title>Blue Vision</ion-title>\n  <ion-buttons slot=\"end\">\n    <ion-menu-button router-link></ion-menu-button>\n  </ion-buttons>\n  <ion-icon slot=\"start\" routerLink=\"{{user_home}}\" name=\"home\"></ion-icon>\n</ion-toolbar>\n\n<ion-content>\n\n  <div class=\"orders\"></div>\n  <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Username</ion-label>\n      <ion-input inputmode=\"text\" formControlName='username'></ion-input>\n    </ion-item>\n    <div>\n      <ng-container *ngIf=\"(username.dirty || username.touched)\">\n        <small *ngIf=\"username.hasError('required')\" class=\" error-message\" [ngStyle]=\"{'color': 'red'}\">Username\n          Required</small>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input inputmode=\"email\" formControlName=\"email\"></ion-input>\n\n    </ion-item>\n    <ng-container *ngIf=\"(email.dirty || email.touched)\">\n      <small *ngIf=\"email.hasError('required')\" class=\" error-message\" [ngStyle]=\"{'color': 'red'}\">Email\n        Required</small>\n    </ng-container>\n\n    <ion-item>\n      <ion-label position=\"floating\">Mobile</ion-label>\n      <ion-input inputmode=\"email\" formControlName=\"phone\"></ion-input>\n\n    </ion-item>\n    <ng-container *ngIf=\"(phone.dirty || phone.touched)\">\n      <small *ngIf=\"phone.hasError('required')\" class=\" error-message\" [ngStyle]=\"{'color': 'red'}\">Mobile\n        Required</small>\n    </ng-container>\n    <ion-item>\n      <ion-label position=\"floating\">password</ion-label>\n      <ion-input placeholder='Password' type=\"password\" formControlName='password' required>\n      </ion-input>\n    </ion-item>\n    <ng-container *ngIf=\"(password.dirty || password.touched)\">\n      <small *ngIf=\"password.hasError('required')\" class=\" error-message\" [ngStyle]=\"{'color': 'red'}\">password\n        Required</small>\n    </ng-container>\n    <ion-item>\n      <ion-label position=\" \">Admin</ion-label>\n\n      <ion-checkbox checked=\"false\" formControlName=\"role\"></ion-checkbox>\n\n\n    </ion-item>\n    <ion-button [disabled]=\"!employeeForm.valid\" type=\"submit\" shape=\"round\">Register</ion-button>\n\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=newemployee-newemployee-module-es2015.js.map