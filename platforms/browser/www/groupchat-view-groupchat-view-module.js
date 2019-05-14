(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groupchat-view-groupchat-view-module"],{

/***/ "./node_modules/@ionic-native/keyboard/ngx/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ionic-native/keyboard/ngx/index.js ***!
  \**********************************************************/
/*! exports provided: Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Keyboard = /** @class */ (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keyboard.prototype.hideFormAccessoryBar = function (hide) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hideFormAccessoryBar", { "sync": true }, arguments); };
    Keyboard.prototype.hide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hide", { "sync": true, "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.show = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "show", { "sync": true, "platforms": ["Android"] }, arguments); };
    Keyboard.prototype.setResizeMode = function (mode) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setResizeMode", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.onKeyboardShow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardShow", { "eventObservable": true, "event": "native.keyboardshow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillShow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardWillShow", { "eventObservable": true, "event": "keyboardWillShow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardHide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardHide", { "eventObservable": true, "event": "native.keyboardhide", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillHide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardWillHide", { "eventObservable": true, "event": "keyboardWillHide", "platforms": ["iOS", "Android"] }, arguments); };
    Object.defineProperty(Keyboard.prototype, "isVisible", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "isVisible"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "isVisible", value); },
        enumerable: true,
        configurable: true
    });
    Keyboard.pluginName = "Keyboard";
    Keyboard.plugin = "cordova-plugin-ionic-keyboard";
    Keyboard.pluginRef = "window.Keyboard";
    Keyboard.repo = "https://github.com/ionic-team/cordova-plugin-ionic-keyboard";
    Keyboard.platforms = ["Android", "iOS"];
    Keyboard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Keyboard);
    return Keyboard;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tleWJvYXJkL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBK0JKLDRCQUFpQjs7OztJQWE3Qyx1Q0FBb0IsYUFBQyxJQUFhO0lBU2xDLHVCQUFJO0lBU0osdUJBQUk7SUFVSixnQ0FBYSxhQUFDLElBQVk7SUFXMUIsaUNBQWM7SUFhZCxxQ0FBa0I7SUFhbEIsaUNBQWM7SUFhZCxxQ0FBa0I7MEJBckZsQiwrQkFBUzs7Ozs7Ozs7Ozs7SUFORSxRQUFRO1FBRHBCLFVBQVUsRUFBRTtPQUNBLFFBQVE7bUJBakNyQjtFQWlDOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBLZXlib2FyZFxuICogQGRlc2NyaXB0aW9uXG4gKiBLZXlib2FyZCBwbHVnaW4gZm9yIENvcmRvdmEuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb25pYy1rZXlib2FyZGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtLZXlib2FyZCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2tleWJvYXJkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBrZXlib2FyZDogS2V5Ym9hcmQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMua2V5Ym9hcmQuc2hvdygpO1xuICpcbiAqIHRoaXMua2V5Ym9hcmQuaGlkZSgpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0tleWJvYXJkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuS2V5Ym9hcmQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLZXlib2FyZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrIGtleWJvYXJkIHN0YXR1cyB2aXNpYmxlIG9yIG5vdC5cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBrZXlib2FyZCBhY2Nlc3NvcnkgYmFyIHdpdGggdGhlIG5leHQsIHByZXZpb3VzIGFuZCBkb25lIGJ1dHRvbnMuXG4gICAqIEBwYXJhbSBoaWRlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGhpZGVGb3JtQWNjZXNzb3J5QmFyKGhpZGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGtleWJvYXJkIGlmIHNob3duLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZvcmNlIGtleWJvYXJkIHRvIGJlIHNob3duLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBzaG93KCk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJvZ3JhbWF0aWNhbGx5IHNldCB0aGUgcmVzaXplIG1vZGVcbiAgICogQHBhcmFtIG1vZGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBzZXRSZXNpemVNb2RlKG1vZGU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGlzIHNob3duLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICduYXRpdmUua2V5Ym9hcmRzaG93JyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkU2hvdygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgd2lsbCBzaG93LiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZFdpbGxTaG93JyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkV2lsbFNob3coKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGlzIGhpZGRlbi4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnbmF0aXZlLmtleWJvYXJkaGlkZScsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgb25LZXlib2FyZEhpZGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIHdpbGwgaGlkZS4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAna2V5Ym9hcmRXaWxsSGlkZScsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgb25LZXlib2FyZFdpbGxIaWRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/groupchat-view/groupchat-view.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/groupchat-view/groupchat-view.module.ts ***!
  \*********************************************************/
/*! exports provided: GroupchatViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupchatViewPageModule", function() { return GroupchatViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groupchat_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groupchat-view.page */ "./src/app/groupchat-view/groupchat-view.page.ts");







var routes = [
    {
        path: '',
        component: _groupchat_view_page__WEBPACK_IMPORTED_MODULE_6__["GroupchatViewPage"]
    }
];
var GroupchatViewPageModule = /** @class */ (function () {
    function GroupchatViewPageModule() {
    }
    GroupchatViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_groupchat_view_page__WEBPACK_IMPORTED_MODULE_6__["GroupchatViewPage"]]
        })
    ], GroupchatViewPageModule);
    return GroupchatViewPageModule;
}());



/***/ }),

/***/ "./src/app/groupchat-view/groupchat-view.page.html":
/*!*********************************************************!*\
  !*** ./src/app/groupchat-view/groupchat-view.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n        <div class=\"Inline\"><img src=\"{{currentGroupData.icon || 'https://pbs.twimg.com/profile_images/857490466572443648/c05JqEgo_400x400.jpg' }}\" class=\"circular\"></div>\n        <div class=\"Inline\"><span style=\"padding:5px;\" >{{currentGroupData.name}}</span></div>  \n      </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding #content [scrollEvents]=\"true\" (ionScrollStart)=\"logScrollStart()\" (ionScroll)=\"logScrolling($event)\" (ionScrollEnd)=\"logScrollEnd()\">\n      <ion-list>\n      <div class=\"chat\" *ngFor=\"let message of groupMessages\">\n        <div [class]=\"message.sender.uid === loggedInUserData.uid ? 'message you' : 'message me'\"><span><b style=\"\n          font-size: 10px\">{{message.sender.name}}:</b></span><br>{{message.text}}</div>\n      </div> \n      </ion-list>\n</ion-content>\n\n<ion-footer no-border>\n    <ion-toolbar>\n      <div class=\"bar bar-footer bar-balanced chat-box-container\">\n            <ion-input class=\"chat-editor-box\" placeholder=\"Type Your Message Here..\" type=\"text\" [(ngModel)]=\"messageText\"></ion-input>\n            <div class=\"btnSendChatView\">\n          <button item-right clear (click)='sendMessage($event)' class = \"btnSendChatView\">\n            <ion-icon name=\"send\" class=\"btnSendChat\"></ion-icon>\n          </button>\n          </div>\n      </div>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/groupchat-view/groupchat-view.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/groupchat-view/groupchat-view.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  max-width: 25px;\n  max-height: 25px; }\n\n.circular {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%; }\n\n.Inline {\n  display: inline-flex;\n  vertical-align: middle; }\n\n.chat-box-container {\n  position: fixed;\n  bottom: 2px;\n  display: inline-flex;\n  padding: 0 7px 0 0px;\n  background: white;\n  width: 100%; }\n\n.chat-editor-box {\n  display: inline-flex;\n  justify-items: center;\n  background: white;\n  align-content: center;\n  align-items: center;\n  border: 1px solid #ccc;\n  border-radius: 24px;\n  padding-left: 4px !important;\n  font-size: 14px;\n  min-height: 38px;\n  max-height: 100px; }\n\n.btnSendChatView {\n  height: 38px;\n  width: 38px;\n  margin-left: 4px;\n  background: #2636be;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  vertical-align: middle;\n  border-radius: 50%; }\n\n.btnSendChat {\n  height: 24px;\n  width: 24px; }\n\n.chat {\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column; }\n\n.message {\n  margin: 0.2em 0;\n  padding: 0.5em;\n  max-width: 70%; }\n\n.me {\n  align-self: flex-start;\n  background-color: #F1F0F0;\n  color: black;\n  border-radius: 10px 10px 10px 0px; }\n\n.you {\n  align-self: flex-end;\n  background-color: #2636be;\n  color: white;\n  border-radius: 10px 10px 0px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbnMtMTUvRG9jdW1lbnRzL0NvbWV0Q2hhdC1Jb25pYy9Db21ldENoYXRQUk8tSW9uaWNTYW1wbGVBcHAvc3JjL2FwcC9ncm91cGNoYXQtdmlldy9ncm91cGNoYXQtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFFWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFFSSxvQkFBb0I7RUFDcEIsc0JBQXNCLEVBQUE7O0FBSTFCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdsQjtFQUNJLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlDQUFpQyxFQUFBOztBQUdyQztFQUNJLG9CQUFvQjtFQUNwQix5QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGlDQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBjaGF0LXZpZXcvZ3JvdXBjaGF0LXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gICAgbWF4LXdpZHRoOiAyNXB4O1xuICAgIG1heC1oZWlnaHQ6IDI1cHg7XG59XG4uY2lyY3VsYXJ7XG4gICAgd2lkdGg6MjRweDtcbiAgICBoZWlnaHQ6MjRweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5JbmxpbmV7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG59XG5cbi5jaGF0LWJveC1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBhZGRpbmc6IDAgN3B4IDAgMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmNoYXQtZWRpdG9yLWJveHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHBhZGRpbmctbGVmdDogNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1pbi1oZWlnaHQ6IDM4cHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5cblxuLmJ0blNlbmRDaGF0Vmlld3tcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjYzNmJlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYnRuU2VuZENoYXR7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xufVxuXG4uY2hhdCB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuICAgIFxuLm1lc3NhZ2Uge1xuICAgIG1hcmdpbjogMC4yZW0gMDtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLm1lIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYwRjA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDBweDtcbn1cblxuLnlvdSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjYzNmJlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/groupchat-view/groupchat-view.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/groupchat-view/groupchat-view.page.ts ***!
  \*******************************************************/
/*! exports provided: GroupchatViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupchatViewPage", function() { return GroupchatViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cometchat-pro/chat */ "./node_modules/@cometchat-pro/chat/CometChat.js");
/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");






var GroupchatViewPage = /** @class */ (function () {
    function GroupchatViewPage(router, route, keyboard, renderer2) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.keyboard = keyboard;
        this.renderer2 = renderer2;
        var html = document.getElementsByTagName('html').item(0);
        this.keyboard.onKeyboardHide().subscribe(function () {
            //this.renderer2.setStyle(html, 'height','101vh');
            _this.moveToBottom();
        });
        this.keyboard.onKeyboardShow().subscribe(function () {
            //this.renderer2.setStyle(html, 'height','auto');
            _this.moveToBottom();
        });
        this.route.queryParams.subscribe(function (params) {
            console.log('params: ', params);
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.currentGroupData = _this.router.getCurrentNavigation().extras.state.group;
            }
        });
    }
    GroupchatViewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            console.log("scrolled caled");
            _this.content.scrollToBottom(300);
        }, 2000);
    };
    GroupchatViewPage.prototype.ngOnInit = function () {
        var _this = this;
        var limit = 30;
        console.log("data of currentGroupData is ", this.currentGroupData);
        var guid = this.currentGroupData["guid"];
        console.log("guid ", guid);
        this.messagesRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].MessagesRequestBuilder().setLimit(limit).setGUID(this.currentGroupData.guid).build();
        this.loadMessages();
        this.addMessageEventListner();
        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].getLoggedinUser().then(function (user) {
            console.log("user is ", user);
            _this.loggedInUserData = user;
        }, function (error) {
            console.log("error getting details:", { error: error });
        });
    };
    GroupchatViewPage.prototype.loadMessages = function () {
        var _this = this;
        this.messagesRequest.fetchPrevious().then(function (messages) {
            console.log("Message list fetched:", messages);
            // Handle the list of messages
            _this.groupMessages = messages;
            // this.userMessages.prepend(messages);
            console.log("groupMessages are ", _this.groupMessages);
            //this.content.scrollToBottom(1500);
            _this.moveToBottom();
        }, function (error) {
            console.log("Message fetching failed with error:", error);
        });
    };
    GroupchatViewPage.prototype.loadPreviousMessages = function () {
        var _this = this;
        this.messagesRequest.fetchPrevious().then(function (messages) {
            console.log("Message list fetched:", messages);
            // Handle the list of messages
            var newMessages = messages;
            // this.userMessages = messages;
            // this.userMessages.prepend(messages);
            if (newMessages != "") {
                _this.groupMessages = newMessages.concat(_this.groupMessages);
            }
            console.log("UserMessages are ", _this.groupMessages);
            //this.content.scrollToBottom(1500);
        }, function (error) {
            console.log("Message fetching failed with error:", error);
        });
    };
    GroupchatViewPage.prototype.moveToBottom = function () {
        console.log("here moving to bottom");
        this.content.scrollToBottom(2000);
    };
    GroupchatViewPage.prototype.logScrollStart = function () {
        console.log("logScrollStart : When Scroll Starts");
    };
    GroupchatViewPage.prototype.logScrolling = function ($event) {
        console.log("logScrolling : When Scrolling ", $event.detail.scrollTop);
        if ($event.detail.scrollTop == 0) {
            console.log("scroll reached to top");
            this.loadPreviousMessages();
        }
    };
    GroupchatViewPage.prototype.logScrollEnd = function () {
        console.log("logScrollEnd : When Scroll Ends");
    };
    GroupchatViewPage.prototype.addMessageEventListner = function () {
        var _this = this;
        var listenerID = "GroupMessage";
        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].addMessageListener(listenerID, new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].MessageListener({
            onTextMessageReceived: function (textMessage) {
                console.log("Text message successfully", textMessage);
                if (textMessage.receiverID != _this.loggedInUserData.uid) {
                    _this.groupMessages.push(textMessage);
                    _this.moveToBottom();
                }
                console.log("here uid ", textMessage.sender.uid);
                console.log("logged userID ", _this.loggedInUserData.uid);
                // Handle text message
            },
            onMediaMessageReceived: function (mediaMessage) {
                console.log("Media message received successfully", mediaMessage);
                // Handle media message
            },
            onCutomMessageReceived: function (customMessage) {
                console.log("Media message received successfully", customMessage);
                // Handle media message
            }
        }));
    };
    GroupchatViewPage.prototype.sendMessage = function () {
        var _this = this;
        console.log("tapped on send Message ", this.messageText);
        if (this.messageText != "") {
            var messageType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].MESSAGE_TYPE.TEXT;
            var receiverType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].RECEIVER_TYPE.GROUP;
            var textMessage = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].TextMessage(this.currentGroupData.guid, this.messageText, messageType, receiverType);
            _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].sendMessage(textMessage).then(function (message) {
                console.log("Message sent successfully:", message);
                // Text Message Sent Successfully
                _this.groupMessages.push(message);
                _this.messageText = "";
                // this.content.scrollToBottom(1500);
                _this.moveToBottom();
            }, function (error) {
                console.log("Message sending failed with error:", error);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GroupchatViewPage.prototype, "content", void 0);
    GroupchatViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groupchat-view',
            template: __webpack_require__(/*! ./groupchat-view.page.html */ "./src/app/groupchat-view/groupchat-view.page.html"),
            providers: [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"]],
            styles: [__webpack_require__(/*! ./groupchat-view.page.scss */ "./src/app/groupchat-view/groupchat-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], GroupchatViewPage);
    return GroupchatViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=groupchat-view-groupchat-view-module.js.map