(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orderform-orderform-module"], {
    /***/
    "27Th":
    /*!*****************************************************!*\
      !*** ./src/app/pages/orderform/orderform.module.ts ***!
      \*****************************************************/

    /*! exports provided: OrderformPageModule */

    /***/
    function Th(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderformPageModule", function () {
        return OrderformPageModule;
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


      var _orderform_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orderform-routing.module */
      "xhje");
      /* harmony import */


      var _orderform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./orderform.page */
      "HVCB");

      var OrderformPageModule = function OrderformPageModule() {
        _classCallCheck(this, OrderformPageModule);
      };

      OrderformPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orderform_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderformPageRoutingModule"]],
        declarations: [_orderform_page__WEBPACK_IMPORTED_MODULE_6__["OrderformPage"]]
      })], OrderformPageModule);
      /***/
    },

    /***/
    "Fs6a":
    /*!*****************************************************!*\
      !*** ./src/app/pages/orderform/orderform.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Fs6a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  height: 75px;\n  --background: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);\n}\n\nion-menu-button {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n}\n\nion-title {\n  font-size: 28px;\n  margin-top: 12px;\n  text-align: center;\n  margin-left: 15px;\n  color: #fff;\n}\n\nion-icon {\n  color: #fff;\n  font-size: 28px;\n  margin-top: 12px;\n  margin-left: 12px;\n}\n\nion-item {\n  border: 1px solid #dcdcdc;\n  font-size: 13px;\n  --min-height: 0;\n}\n\nh2 {\n  margin-left: 10px;\n}\n\n.orders {\n  border-bottom: 1px solid #dcdcdc;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.form {\n  margin-top: 10px;\n}\n\n.orderform {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.sphere {\n  background: #E0E0E0;\n  border-bottom: 1px solid #D3D3D3;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0 5px;\n}\n\n.right {\n  background: #F5F5F5;\n  border-bottom: 1px solid #D3D3D3;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0 5px;\n}\n\n.left {\n  background: #ffffff;\n  border-bottom: 1px solid #D3D3D3;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0 5px;\n}\n\n.dv {\n  background: #FFFFFF;\n  border-bottom: 1px solid #D3D3D3;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0 5px;\n  padding-bottom: 8px;\n}\n\n.leftdv {\n  background: #F5F5F5;\n  border-bottom: 1px solid #D3D3D3;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0 5px;\n  padding-bottom: 8px;\n}\n\n.nv {\n  background: #F5F5F5;\n  border-bottom: 1px solid #D3D3D3;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0 5px;\n  padding-bottom: 8px;\n}\n\n.leftnv {\n  background: #FFFFFF;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0 5px;\n  padding-bottom: 12px;\n}\n\n.total {\n  margin-top: 8px;\n}\n\n.amount {\n  --background: #dcdcdc;\n}\n\nion-item.item-has-focus > ion-label {\n  color: #000 !important;\n}\n\nion-button {\n  font-size: 13px;\n  text-transform: capitalize;\n}\n\n.cancelbtn {\n  --background: #dcdcdc;\n  color: #000;\n}\n\n.savebtn {\n  --background: #52E5E7;\n  color: #000;\n}\n\n.is-invalid {\n  /*   --background: #f0fafa;\n    color: #000; */\n  border: red solid 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlcmZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlFQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUlBO0VBQ0U7a0JBQUE7RUFFRSxxQkFBQTtBQURKIiwiZmlsZSI6Im9yZGVyZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjNTJFNUU3IDEwJSwgIzEzMENCNyAxMDAlKTtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC0tbWluLWhlaWdodDogMDtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5oMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLm9yZGVycyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ub3JkZXJmb3JtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uc3BoZXJlIHtcclxuICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QzRDNEMztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDNEM0QzO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QzRDNEMztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG4uZHYge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDNEM0QzO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ubGVmdGR2IHtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QzRDNEMztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG5cclxuLm52IHtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QzRDNEMztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmxlZnRudiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLnRvdGFsIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmFtb3VudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkY2RjZGM7XHJcbn1cclxuXHJcbmlvbi1pdGVtLml0ZW0taGFzLWZvY3VzPmlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2FuY2VsYnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2RjZGNkYztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uc2F2ZWJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1MkU1RTc7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuXHJcbi5pcy1pbnZhbGlkIHtcclxuICAvKiAgIC0tYmFja2dyb3VuZDogI2YwZmFmYTtcclxuICAgIGNvbG9yOiAjMDAwOyAqL1xyXG4gICAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "HVCB":
    /*!***************************************************!*\
      !*** ./src/app/pages/orderform/orderform.page.ts ***!
      \***************************************************/

    /*! exports provided: OrderformPage */

    /***/
    function HVCB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderformPage", function () {
        return OrderformPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_orderform_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./orderform.page.html */
      "mRVr");
      /* harmony import */


      var _orderform_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./orderform.page.scss */
      "Fs6a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var OrderformPage = /*#__PURE__*/function () {
        function OrderformPage(formBuilder, router, http, auth, toastController) {
          _classCallCheck(this, OrderformPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.http = http;
          this.auth = auth;
          this.toastController = toastController;
          this.submitted = false;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
          this.user_home = JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).role == 'admin' ? '/dashboard' : '/orders';
          this.employee_id = JSON.parse(localStorage.getItem('token')).user_id ? JSON.parse(localStorage.getItem('token')).user_id : '';
          this.validation_messages = {
            'order_date': [{
              type: 'required',
              message: 'Order Date is required.'
            }],
            'delivery_date': [{
              type: 'required',
              message: 'Delivery Date  is required.'
            }],
            'customer_phone': [{
              type: 'required',
              message: 'Phone  is required.'
            }, {
              type: 'pattern',
              message: 'Your Phone must contain only numbers .'
            }],
            'customer_name': [{
              type: 'required',
              message: 'Name  is required.'
            }],
            'customer_address': [{
              type: 'required',
              message: 'Address  is required.'
            }],
            'customer_age': [{
              type: 'required',
              message: 'Age is required.'
            }, {
              type: 'pattern',
              message: 'Your Phone must contain only numbers .'
            }],
            'customer_gender': [{
              type: 'required',
              message: 'Gender  is required.'
            }],
            'lens_type': [{
              type: 'required',
              message: 'Len Type  is required.'
            }],
            'tint': [{
              type: 'required',
              message: 'Tint is required.'
            }],
            'tint_discount': [{
              type: 'required',
              message: 'Tint Discount is required.'
            }],
            'lens_tax': [{
              type: 'required',
              message: 'Lens Tax is required.'
            }, {
              type: 'pattern',
              message: 'Your Price must contain only numbers .'
            }],
            'frame_type': [{
              type: 'required',
              message: 'Frame Type  is required.'
            }],
            'frame_price': [{
              type: 'required',
              message: 'Frame Price  is required.'
            }, {
              type: 'pattern',
              message: 'Your Price must contain only numbers .'
            }],
            'frame_brand': [{
              type: 'required',
              message: 'Frame Brand  is required.'
            }],
            'frame_discount': [{
              type: 'required',
              message: 'Frame Discount  is required.'
            }],
            'frame_tax': [{
              type: 'required',
              message: 'Frame Tax  is required.'
            }],
            'total_amount': [{
              type: 'required',
              message: 'Total  is required.'
            }, {
              type: 'pattern',
              message: 'Your Total must contain only numbers .'
            }],
            'discount': [{
              type: 'required',
              message: 'Discount  is required.'
            }, {
              type: 'pattern',
              message: 'Your Discount must contain only numbers .'
            }],
            'advance': [{
              type: 'required',
              message: 'Advance  is required.'
            }, {
              type: 'pattern',
              message: 'Your Advance must contain only numbers .'
            }],
            'balance': [{
              type: 'required',
              message: 'Balance  is required.'
            }, {
              type: 'pattern',
              message: 'Your Balance must contain only numbers .'
            }],
            // 'grand_total': [{ type: 'required', message: 'G Total is required.' }, { type: 'pattern', message: 'Your Total must contain only numbers .' }],
            'delivery_status': [{
              type: 'required',
              message: 'Delivery Status is required.'
            }]
          };
        }

        _createClass(OrderformPage, [{
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
            var _this = this;

            this.orderForm = this.formBuilder.group({
              order_id: [''
              /* { value: '', disabled: true } */
              , _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              userId: [''],
              order_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              // created: ['', Validators.required],
              delivery_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              customer_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
              customer_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              customer_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              customer_age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
              customer_gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              lens_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              lens_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              tint: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              tint_discount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              lens_tax: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              frame_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              frame_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              frame_brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              frame_tax: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              frame_discount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              frame_details: this.formBuilder.group({
                right: this.formBuilder.group({
                  dv_sph: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                  dv_cyl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                  dv_axi: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                  nv_sph: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                  nv_cyl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                  nv_axi: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                }),
                left: this.formBuilder.group({
                  dv_sph: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                  dv_cyl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                  dv_axi: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                  nv_sph: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                  nv_cyl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                  nv_axi: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                })
              }),
              total_amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              discount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              advance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              balance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              // grand_total: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
              next_visit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              refered_by: [''],
              employee_id: [this.employee_id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              delivery_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              paid_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            /*   if (localStorage.getItem('order')) { // testing
                this.orderForm.patchValue(JSON.parse(localStorage.getItem('order')))
              } */

            this.http.get(this.baseUrl + '/order/lastorder', {}).subscribe(function (data) {
              if (data['response'] && data['response'].order_id) {
                _this.ramdon_id = 'BL-' + (Number(data['response'].order_id.split('-')[1]) + 1);

                _this.orderForm.patchValue({
                  order_id: _this.ramdon_id
                });
              } else {
                _this.ramdon_id = 'BL-1001';

                _this.orderForm.patchValue({
                  order_id: 'BL-1001'
                });
              }
            });
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.orderForm.controls;
          }
        }, {
          key: "getuser",
          value: function getuser() {
            var _this2 = this;

            this.http.post(this.baseUrl + '/user/userDetails', {
              phone: this.orderForm.value['customer_phone']
            }).subscribe(function (data) {
              if (data['response'] && data['status'] == 1) {
                _this2.orderForm.patchValue({
                  userId: data['response']._id,
                  customer_name: data['response'].name,
                  customer_address: data['response'].address,
                  customer_age: data['response'].age,
                  customer_gender: data['response'].gender
                });
              }
            });
          }
        }, {
          key: "updateCalc",
          value: function updateCalc() {
            var lens_price = parseInt(this.orderForm.value.lens_price);
            var lens_discount = parseInt(this.orderForm.value.lens_price) * (parseInt(this.orderForm.value.tint_discount) / 100);
            var lens_tax = (lens_price - lens_discount) * parseInt(this.orderForm.value.lens_tax) / 100;
            var lens_cal = lens_price
            /* - lens_discount */
            + lens_tax;
            var frame_price = parseInt(this.orderForm.value.frame_price);
            var frame_discount = parseInt(this.orderForm.value.frame_price) * (parseInt(this.orderForm.value.frame_discount) / 100);
            var frame_tax = (frame_price - frame_discount) * parseInt(this.orderForm.value.frame_tax) / 100;
            var frame_cal = frame_price
            /* - frame_discount */
            + frame_tax;
            this.orderForm.patchValue({
              total_amount: Math.round(lens_cal + frame_cal)
            });

            if (this.orderForm.value.total_amount > 0) {
              this.orderForm.patchValue({
                discount: Math.round(frame_discount + lens_discount),
                balance: Math.round(lens_cal + frame_cal - (lens_discount + frame_discount)) - this.orderForm.value.advance
              });
            }
          }
        }, {
          key: "restart",
          value: function restart() {
            this.orderForm.reset();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            for (var el in this.orderForm.controls) {
              if (this.orderForm.controls[el].errors) {
                console.log(el.split('_')[0], el.split('_')[1]);
                this.presentToast((el.split('_')[0] + ' ' + el.split('_')[1] ? el.split('_')[1] : '') + ' Required');
                return;
              }
            }

            this.submitted = true; // localStorage.setItem('order', JSON.stringify(this.orderForm.value)); // testing

            this.orderForm.patchValue({
              created: Date.now()
            });

            if (this.orderForm.invalid) {
              this.presentToast('invalid details');
              return;
            } else {
              this.http.post(this.baseUrl + '/order/save', this.orderForm.value).subscribe(function (result) {
                if (result['status'] == 0) {
                  _this3.presentToast('invalid details'); // localStorage.setItem('order', JSON.stringify(this.orderForm.value)); // testing

                } else {
                  _this3.presentToast('Order Place Successfully'); // localStorage.removeItem('order');


                  _this3.router.navigate(['/orders']); // this.orderForm.patchValue({})

                }
              });
            }
          }
        }]);

        return OrderformPage;
      }();

      OrderformPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
        }];
      };

      OrderformPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orderform',
        template: _raw_loader_orderform_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orderform_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrderformPage);
      /***/
    },

    /***/
    "mRVr":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderform/orderform.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mRVr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar>\r\n    <ion-title>Blue Vision</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-icon slot=\"start\" routerLink=\"{{user_home}}\" name=\"home\"></ion-icon>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n    <div>\r\n        <h2>Order - {{ramdon_id}}</h2>\r\n    </div>\r\n\r\n    <!-- <app-dynamic-form [questions]=\"questions$ | async\"></app-dynamic-form> -->\r\n\r\n    <form [formGroup]=\"orderForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"orders\">\r\n            <div class=\"form ion-text-center\">\r\n                <!--  <ion-item class=\"orderform\" lines='none'>\r\n                    <ion-label position=\"floating\">Order Number\r\n                    </ion-label>\r\n                    <ion-input placeholder='BV-00001' type=\"text\" formControlName=\"order_id\"></ion-input>\r\n                </ion-item> -->\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size=5>\r\n                            <ion-item [ngClass]=\"{ 'is-invalid': submitted && f.order_date.errors }\">\r\n                                <ion-label position=\"floating\">Order Date</ion-label>\r\n                                <ion-datetime class=\"form-controll\" formControlName=\"order_date\"\r\n                                    displayFormat=\"MM/DD/YYYY\" required>\r\n                                </ion-datetime>\r\n                            </ion-item>\r\n                            <div class=\"validation-errors\">\r\n                                <!--  <ng-container *ngFor=\"let validation of validation_messages.username\">\r\n                                  <div class=\"error-message\" *ngIf=\"orderForm.get('username').hasError(validation.type) && (orderForm.get('username').dirty || orderForm.get('username').touched)\">\r\n                                    {{ validation.message }}\r\n                                  </div>\r\n                                </ng-container> -->\r\n                            </div>\r\n                        </ion-col>\r\n                        <ion-col size=2>\r\n                        </ion-col>\r\n                        <ion-col size=5>\r\n                            <ion-item [ngClass]=\"{ 'is-invalid': submitted && f.delivery_date.errors }\">\r\n                                <ion-label position=\"floating\">Delivery Date</ion-label>\r\n                                <ion-datetime formControlName=\"delivery_date\" displayFormat=\"MM/DD/YYYY\"></ion-datetime>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col size=8>\r\n                            <ion-item [ngClass]=\"{ 'is-invalid': submitted && f.customer_phone.errors }\">\r\n                                <ion-label position=\"floating\">Phone</ion-label>\r\n                                <ion-input type=\"number\" formControlName=\"customer_phone\" placeholder='+91 1234567890'\r\n                                    required (focusout)=\"getuser()\">\r\n                                </ion-input>\r\n                            </ion-item>\r\n\r\n                            <!--  <div class=\"validation-errors\">\r\n                                <div *ngIf=\"submitted && f.customer_phone.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.customer_phone.errors.required\">phone is required</div>\r\n                                </div>\r\n                            </div> -->\r\n\r\n                            <!--  <ng-container *ngFor=\"let validation of validation_messages.customer_phone\">\r\n                                    <div class=\"error-message\"\r\n                                        *ngIf=\"orderForm.get('customer_phone').hasError(validation.type) && (orderForm.get('customer_phone').dirty || orderForm.get('customer_phone').touched)\">\r\n                                        {{ validation.message }}\r\n                                    </div>\r\n                                </ng-container> -->\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n\r\n                    <ion-row>\r\n                        <ion-col size=12>\r\n                            <ion-item [ngClass]=\"{ 'is-invalid': submitted && f.customer_name.errors }\">\r\n                                <ion-label position=\"floating\">Name</ion-label>\r\n                                <ion-input type=\"text\" formControlName=\"customer_name\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=12>\r\n                            <ion-item [ngClass]=\"{ 'is-invalid': submitted && f.customer_address.errors }\">\r\n                                <ion-label position=\"floating\">Address</ion-label>\r\n                                <ion-textarea type=\"text\" formControlName=\"customer_address\"></ion-textarea>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=4>\r\n                            <ion-item [ngClass]=\"{ 'is-invalid': submitted && f.customer_age.errors }\">\r\n                                <ion-label position=\"floating\">Age</ion-label>\r\n                                <ion-input type=\"number\" formControlName=\"customer_age\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=3>\r\n                        </ion-col>\r\n                        <ion-col size=5>\r\n                            <ion-item class=\"select\" lines='none'\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.customer_gender.errors }\">\r\n                                <ion-label position=\"floating\">Gender</ion-label>\r\n                                <ion-select formControlName=\"customer_gender\">\r\n                                    <ion-select-option\r\n                                        *ngFor=\"let val of  [{value:'Male', label:'Male'},{value:'Female', label: 'Female'},{value:'Other', label: 'Other'}]\"\r\n                                        [value]=\"val.value\">\r\n                                        {{val.label}}\r\n                                    </ion-select-option>\r\n                                </ion-select>\r\n                                <!--  <ion-select formControlName=\"customer_gender\">\r\n                                    <ion-select-option value=\"Male\">Male</ion-select-option>\r\n                                    <ion-select-option value=\"Female\">Female</ion-select-option>\r\n                                    <ion-select-option value=\"Other\">Other</ion-select-option>\r\n                                </ion-select> -->\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=7>\r\n                            <ion-item class=\"select\" lines='none'\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.lens_type.errors }\">\r\n                                <ion-label>Lens Type</ion-label>\r\n                                <ion-select formControlName=\"lens_type\">\r\n                                    <ion-select-option value=\"CR\">CR</ion-select-option>\r\n                                    <ion-select-option value=\"GL\">GL</ion-select-option>\r\n                                    <ion-select-option value=\"HC\">HC</ion-select-option>\r\n                                    <ion-select-option value=\"ARC\">ARC</ion-select-option>\r\n                                    <ion-select-option value=\"PROG\">PROG</ion-select-option>\r\n                                    <ion-select-option value=\"DM\">DM</ion-select-option>\r\n                                    <ion-select-option value=\"ARC+PROG\">ARC+PROG</ion-select-option>\r\n                                    <ion-select-option value=\"HC+ARC\">HC+ARC</ion-select-option>\r\n                                    <ion-select-option value=\"SV\">SV</ion-select-option>\r\n                                    <ion-select-option value=\"Bifocal\">Bifocal</ion-select-option>\r\n                                    <ion-select-option value=\"PROG\">PROG</ion-select-option>\r\n\r\n                                </ion-select>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=5>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.lens_price.errors }\">\r\n                                <ion-label position=\"floating\">Lens Price</ion-label>\r\n                                <ion-input placeholder='2000' type=\"number\" formControlName=\"lens_price\"\r\n                                    (ngModelChange)=\"updateCalc()\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=4>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.tint.errors }\">\r\n                                <ion-label position=\"floating\">Tint</ion-label>\r\n                                <ion-input formControlName=\"tint\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=4>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.tint_discount.errors }\">\r\n                                <ion-label position=\"floating\">Tint Discount</ion-label>\r\n                                <ion-input type=\"number\" formControlName=\"tint_discount\" (ngModelChange)=\"updateCalc()\">\r\n                                </ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=4>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.lens_tax.errors }\">\r\n                                <ion-label position=\"floating\">TAX/GST%</ion-label>\r\n                                <ion-input type=\"number\" formControlName=\"lens_tax\" (ngModelChange)=\"updateCalc()\">\r\n                                </ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=6>\r\n                            <ion-item class=\"select\" lines='none'\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.frame_type.errors }\">\r\n                                <ion-label>Frame Type</ion-label>\r\n                                <ion-select formControlName=\"frame_type\">\r\n                                    <ion-select-option value=\"FF\">FF</ion-select-option>\r\n                                    <ion-select-option value=\"FS\">FS</ion-select-option>\r\n                                    <ion-select-option value=\"FSH\">FSH</ion-select-option>\r\n                                    <ion-select-option value=\"FRL\">FRL</ion-select-option>\r\n                                </ion-select>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=2></ion-col>\r\n                        <ion-col size=4>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.frame_price.errors }\">\r\n                                <ion-label position=\"floating\">Frame Price</ion-label>\r\n                                <ion-input type=\"number\" formControlName=\"frame_price\" (ngModelChange)=\"updateCalc()\">\r\n                                </ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=4>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.frame_brand.errors }\">\r\n                                <ion-label position=\"floating\">Brand</ion-label>\r\n                                <ion-input formControlName=\"frame_brand\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=4>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.frame_discount.errors }\">\r\n                                <ion-label position=\"floating\">Frame Discount</ion-label>\r\n                                <ion-input type=\"number\" formControlName=\"frame_discount\"\r\n                                    (ngModelChange)=\"updateCalc()\"></ion-input>\r\n                            </ion-item>\r\n\r\n                        </ion-col>\r\n                        <ion-col size=4>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.frame_tax.errors }\">\r\n                                <ion-label position=\"floating\">TAX/GST%</ion-label>\r\n                                <ion-input type=\"number\" formControlName=\"frame_tax\" (ngModelChange)=\"updateCalc()\">\r\n                                </ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n\r\n\r\n                <ion-grid [ngStyle]=\"{'color':'blue'}\" formGroupName=\"frame_details\">\r\n                    <ion-row class=\"sphere\">\r\n                        <ion-col size=3></ion-col>\r\n                        <ion-col size=3>SPHERE<span style=\"display:block;\">(SPH)</span></ion-col>\r\n                        <ion-col size=3.5>CYLINDER<span style=\"display:block;\">(CYL)</span></ion-col>\r\n                        <ion-col size=2.5>AXIS<span style=\"display:block;\">(AXI)</span></ion-col>\r\n                    </ion-row>\r\n                    <ion-row class=\"right\">\r\n                        <ion-col size=3>Right EYE</ion-col>\r\n                        <ion-col size=3></ion-col>\r\n                        <ion-col size=3.5></ion-col>\r\n                        <ion-col size=2.5></ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row class=\"dv\" formGroupName=\"right\">\r\n                        <ion-col size=3>DV</ion-col>\r\n                        <ion-col size=3>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"dv_sph\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=3.5>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"dv_cyl\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=2.5>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"dv_axi\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row class=\"nv\" formGroupName=\"right\">\r\n                        <ion-col size=3>NV</ion-col>\r\n                        <ion-col size=3>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"nv_sph\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=3.5>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"nv_cyl\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=2.5>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"nv_axi\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row class=\"left\">\r\n                        <ion-col size=3>Left EYE</ion-col>\r\n                        <ion-col size=3></ion-col>\r\n                        <ion-col size=3.5></ion-col>\r\n                        <ion-col size=2.5></ion-col>\r\n                    </ion-row>\r\n                    <ion-row class=\"leftdv\" formGroupName=\"left\">\r\n                        <ion-col size=3>DV</ion-col>\r\n                        <ion-col size=3>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"dv_sph\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=3.5>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"dv_cyl\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=2.5>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"dv_axi\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row class=\"leftnv\" formGroupName=\"left\">\r\n                        <ion-col size=3>NV</ion-col>\r\n                        <ion-col size=3>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"nv_sph\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=3.5>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"nv_cyl\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=2.5>\r\n                            <ion-item>\r\n                                <ion-input formControlName=\"nv_axi\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n\r\n\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size=4>\r\n                            <ion-item class=\"amount\" lines='none'\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.total_amount.errors }\">\r\n                                <ion-label position=\"floating\">Total Amount</ion-label>\r\n                                <ion-input placeholder=\"0\" type=\"number\" formControlName=\"total_amount\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=5>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.discount.errors }\">\r\n                                <ion-label position=\"floating\">Discount Value</ion-label>\r\n                                <ion-input placeholder=\"0\" type=\"number\" formControlName=\"discount\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=3>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.advance.errors }\">\r\n                                <ion-label position=\"floating\">Advance</ion-label>\r\n                                <ion-input placeholder=\"0\" type=\"number\" formControlName=\"advance\"\r\n                                    (ngModelChange)=\"updateCalc()\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=5>\r\n                            <ion-item class=\"amount\" lines='none'\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.balance.errors }\">\r\n                                <ion-label position=\"floating\">Balance</ion-label>\r\n                                <ion-input placeholder=\"0\" type=\"number\" formControlName=\"balance\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <!--  <ion-col size=2></ion-col>\r\n                        <ion-col size=5>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.grand_total.errors }\">\r\n                                <ion-label position=\"floating\">Grand Total</ion-label>\r\n                                <ion-input type=\"number\" formControlName=\"grand_total\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col> -->\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=7>\r\n                            <ion-item lines='none' [ngClass]=\"{ 'is-invalid': submitted && f.next_visit.errors }\">\r\n                                <ion-label position=\"floating\">Next Visit Date</ion-label>\r\n                                <ion-datetime formControlName=\"next_visit\"></ion-datetime>\r\n                            </ion-item>\r\n\r\n                        </ion-col>\r\n                        <ion-col size=3>\r\n                            <ion-item class=\"amount\" lines='none'>\r\n                                <ion-label position=\"floating\">Paid</ion-label>\r\n                                <ion-select formControlName=\"paid_status\">\r\n                                    <ion-select-option value=\"Paid\">Paid</ion-select-option>\r\n                                    <ion-select-option value=\"Not\">Not</ion-select-option>\r\n                                </ion-select>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=6>\r\n                            <ion-item lines='none'>\r\n                                <ion-label position=\"floating\">Referred By</ion-label>\r\n                                <ion-input formControlName=\"refered_by\"></ion-input>\r\n                            </ion-item>\r\n\r\n                        </ion-col>\r\n                        <ion-col size=6>\r\n                            <ion-item class=\"select\" lines='none'\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.delivery_status.errors }\">\r\n                                <ion-label position=\"floating\">Delivered Status</ion-label>\r\n                                <ion-select formControlName=\"delivery_status\">\r\n                                    <ion-select-option value=\"Pending\">Pending</ion-select-option>\r\n                                    <ion-select-option value=\"Fitting\">Fitting</ion-select-option>\r\n                                    <ion-select-option value=\"Ready\">Ready to Deliver</ion-select-option>\r\n                                    <ion-select-option value=\"Delivered\">Delivered</ion-select-option>\r\n                                </ion-select>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=3>\r\n                            <ion-button class=\"cancelbtn\" size=\"medium\" (click)=\"reset()\">Cancel</ion-button>\r\n                        </ion-col>\r\n                        <ion-col size=1></ion-col>\r\n                        <!-- <ion-col size=4>\r\n                            <ion-button class=\"savebtn\" size=\"medium\">Save & Close</ion-button>\r\n                        </ion-col> -->\r\n                        <ion-col size=4>\r\n                            <ion-button class=\"savebtn\" type=\"submit\" size=\"medium\">Save & Print</ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</ion-content>";
      /***/
    },

    /***/
    "xhje":
    /*!*************************************************************!*\
      !*** ./src/app/pages/orderform/orderform-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: OrderformPageRoutingModule */

    /***/
    function xhje(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderformPageRoutingModule", function () {
        return OrderformPageRoutingModule;
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


      var _orderform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orderform.page */
      "HVCB");

      var routes = [{
        path: '',
        component: _orderform_page__WEBPACK_IMPORTED_MODULE_3__["OrderformPage"]
      }];

      var OrderformPageRoutingModule = function OrderformPageRoutingModule() {
        _classCallCheck(this, OrderformPageRoutingModule);
      };

      OrderformPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderformPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=orderform-orderform-module-es5.js.map