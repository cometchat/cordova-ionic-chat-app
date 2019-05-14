(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/pages/tab1/tab1.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1/tab1.page.ts");







var routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
    }
];
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"mainColor\">\n    <ion-title style=\"color: white;\">Chats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"mainColor\">\n  <div>\n    <ion-list class=\"chatList\">\n      <div *ngFor=\"let user of userListArray\">\n          <ion-item (click)=\"tappedOnItems($event, user)\">\n              <ion-avatar slot=\"start\">\n                <img src=\"{{user.avatar || 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1' }}\">\n              </ion-avatar>\n              <ion-label>\n                  <h2>{{user.name}}</h2>\n                  <ion-note><h3>{{user.status}}</h3></ion-note>\n              </ion-label> \n          </ion-item>\n        </div>\n      </ion-list>\n  </div>    \n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadNextUsers($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"dots\"\n            loadingText=\"Loading more data...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-background {\n  background-color: blue; }\n\n.ion-color-mainColor {\n  --ion-color-base: #2636be;\n  --ion-color-base-rgb: 105,187,123;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255,255,255;\n  --ion-color-shade: #2636be;\n  --ion-color-tint: #2636be; }\n\n.chatList {\n  min-height: 350px;\n  border-top-left-radius: 20px;\n  background: #ffffff;\n  border-top-right-radius: 20px;\n  border: 1px solid black;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 5px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbnMtMTUvRG9jdW1lbnRzL0NvbWV0Q2hhdC1Jb25pYy9Db21ldENoYXRQUk8tSW9uaWNTYW1wbGVBcHAvc3JjL2FwcC9wYWdlcy90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0kseUJBQWlCO0VBQ2pCLGlDQUFxQjtFQUNyQiw2QkFBcUI7RUFDckIscUNBQXlCO0VBQ3pCLDBCQUFrQjtFQUNsQix5QkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmlvbi1jb2xvci1tYWluQ29sb3Ige1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMyNjM2YmU7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IDEwNSwxODcsMTIzO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6ICMyNjM2YmU7XG4gICAgLS1pb24tY29sb3ItdGludDogIzI2MzZiZTtcbiAgfVxuXG4gIC5jaGF0TGlzdHtcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIH1cblxuICAvLyAuaW9uLWl0ZW0tYm9yZGVyIHtcbiAgLy8gICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIC8vICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAvLyAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIC8vICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgLy8gICBwYWRkaW5nLXRvcDogNXB4O1xuICAvLyAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cometchat-pro/chat */ "./node_modules/@cometchat-pro/chat/CometChat.js");
/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.userListArray = [];
        this.limit = 30;
        this.usersRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].UsersRequestBuilder().setLimit(this.limit).build();
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.getUserList();
        this.addUserEventListner();
    };
    Tab1Page.prototype.getUserList = function () {
        var _this = this;
        console.log("here the call has reached");
        this.usersRequest.fetchNext().then(function (userList) {
            /* userList will be the list of User class. */
            _this.userListArray = userList;
            console.log("UserList Array :", _this.userListArray);
            /* retrived list can be used to display contact list. */
        }, function (error) {
            console.log("User list fetching failed with error:", error);
        });
    };
    Tab1Page.prototype.tappedOnItems = function (event, user) {
        console.log("here tappedOnItems " + user);
        this.userData = user;
        console.log("{{user.name}}");
        var navigationExtras = {
            state: {
                user: this.userData
            }
        };
        this.router.navigate(['chat-view'], navigationExtras);
    };
    Tab1Page.prototype.loadNextUsers = function (event) {
        var _this = this;
        console.log("here the next users are loaded");
        this.usersRequest.fetchNext().then(function (userList) {
            /* userList will be the list of User class. */
            console.log("User list received:", userList);
            if (userList != "") {
                _this.userListArray = _this.userListArray.concat(userList);
            }
            console.log("UserList Array :", _this.userListArray);
            event.target.complete();
            /* retrived list can be used to display contact list. */
        }, function (error) {
            console.log("User list fetching failed with error:", error);
        });
    };
    Tab1Page.prototype.addUserEventListner = function () {
        var _this = this;
        var listenerID = "UserEventsListnerInList";
        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].addUserListener(listenerID, new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].UserListener({
            onUserOnline: function (onlineUser) {
                /* when someuser/friend comes online, user will be received here */
                console.log("On User Online:", { onlineUser: onlineUser });
                for (var i = 0; i < _this.userListArray.length; i++) {
                    if (_this.userListArray[i].uid == onlineUser.uid) {
                        _this.userListArray[i].status = "Online";
                    }
                }
            },
            onUserOffline: function (offlineUser) {
                /* when someuser/friend went offline, user will be received here */
                console.log("On User Offline:", { offlineUser: offlineUser });
                for (var i = 0; i < _this.userListArray.length; i++) {
                    if (_this.userListArray[i].uid == offlineUser.uid) {
                        _this.userListArray[i].status = "Offline";
                    }
                }
            }
        }));
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/pages/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map