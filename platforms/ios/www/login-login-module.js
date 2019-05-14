(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"outerDiv\">\n    <div class='imageOuter'>\n      <img src=\"../assets/cometchat_white.png\" class=\"center\">\n    </div>\n    <div class=\"loginContainer\">\n      <ion-item> \n          <ion-label position=\"floating\">Enter UID</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"userUID\" class=\"loginInput\"></ion-input>\n        </ion-item>\n        <br>\n        <br>\n        <ion-button expand=\"full\" shape=\"round\" (click)='onSubmit()' class=\"loginBtn\">Login</ion-button>\n    </div>    \n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100px;\n  height: 121.94px; }\n\n.outerDiv {\n  background: #2636be;\n  height: 100%; }\n\n.imageOuter {\n  height: 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.loginContainer {\n  border-radius: 20px 20px 0 0;\n  background: white;\n  height: 60%;\n  padding: 16px; }\n\n.loginInput {\n  padding-left: 0px; }\n\n.loginBtn {\n  --background: #2636be;\n  --background-focused: #2636be;\n  --background-activated: #2636be; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbnMtMTUvRG9jdW1lbnRzL0NvbWV0Q2hhdC1Jb25pYy9Db21ldENoYXRQUk8tSW9uaWNTYW1wbGVBcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kscUJBQWE7RUFDYiw2QkFBcUI7RUFDckIsK0JBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuY2VudGVyIHtcbiAgICBcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEyMS45NHB4O1xufVxuXG4ub3V0ZXJEaXZ7XG4gICAgYmFja2dyb3VuZDogIzI2MzZiZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uaW1hZ2VPdXRlcntcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbkNvbnRhaW5lcntcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5sb2dpbklucHV0e1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ubG9naW5CdG57XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjYzNmJlO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMjYzNmJlO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyNjM2YmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cometchat-pro/chat */ "./node_modules/@cometchat-pro/chat/CometChat.js");
/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__);





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingController, alertController, router) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.appID = "6e13b23d7a3";
        this.apiKey = "824649fc1cdf02059975c40174d0af23695aea65";
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.presentAlert = function (alertmessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            message: alertmessage,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please Wait',
                            spinner: 'dots',
                            translucent: true
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__["CometChat"].init(this.appID).then(function () {
                            console.log("Initialization completed successfully");
                            _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__["CometChat"].login(_this.userUID, _this.apiKey).then(function (user) {
                                console.log("Login Successful:", { user: user });
                                loading.dismiss();
                                _this.router.navigate(['tabs']);
                                // User loged in successfully.
                            }, function (error) {
                                loading.dismiss();
                                _this.presentAlert(error.message);
                                // User login failed, check error and take appropriate action.
                            });
                            // You can now call login function.
                        }, function (error) {
                            console.log("Initialization failed with error:", error);
                            _this.presentAlert(error.message);
                            // Check the reason for error and take apppropriate action.
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map