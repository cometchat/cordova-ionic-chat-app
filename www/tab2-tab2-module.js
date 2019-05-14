(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/pages/tab2/tab2.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.module.ts ***!
  \*******************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/pages/tab2/tab2.page.ts");







var routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
    }
];
var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"mainColor\">\n    <ion-title style=\"color: white;\">Groups</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"mainColor\">\n  <div>\n    <ion-list class=\"groupList\">\n        <div *ngFor=\"let group of groupListArray\">\n            <ion-item (click)=\"tappedOnItems($event, group)\">\n                <ion-avatar slot=\"start\">\n                  <img src=\"{{group.icon || 'https://pbs.twimg.com/profile_images/857490466572443648/c05JqEgo_400x400.jpg' }}\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{group.name}}</h2>\n                    <ion-note><h3>{{group.description}}</h3></ion-note>\n                </ion-label> \n            </ion-item>\n          </div>\n    </ion-list>\n  </div>  \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadNextGroups($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"dots\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-color-mainColor {\n  --ion-color-base: #2636be;\n  --ion-color-base-rgb: 105,187,123;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255,255,255;\n  --ion-color-shade: #2636be;\n  --ion-color-tint: #2636be; }\n\n.toolbar-background {\n  background-color: blue; }\n\n.groupList {\n  min-height: 350px;\n  border-top-left-radius: 20px;\n  background: #ffffff;\n  border-top-right-radius: 20px;\n  border: 1px solid black;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 5px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbnMtMTUvRG9jdW1lbnRzL0NvbWV0Q2hhdC1Jb25pYy9Db21ldENoYXRQUk8tSW9uaWNTYW1wbGVBcHAvc3JjL2FwcC9wYWdlcy90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQWlCO0VBQ2pCLGlDQUFxQjtFQUNyQiw2QkFBcUI7RUFDckIscUNBQXlCO0VBQ3pCLDBCQUFrQjtFQUNsQix5QkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tY29sb3ItbWFpbkNvbG9yIHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMjYzNmJlO1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiAxMDUsMTg3LDEyMztcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiAjMjYzNmJlO1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6ICMyNjM2YmU7XG4gIH1cblxuICAudG9vbGJhci1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5ncm91cExpc3R7XG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.ts ***!
  \*****************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cometchat-pro/chat */ "./node_modules/@cometchat-pro/chat/CometChat.js");
/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.groupListArray = [];
        this.limit = 30;
        this.groupsRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].GroupsRequestBuilder().setLimit(this.limit).build();
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.getGroupList();
    };
    Tab2Page.prototype.getGroupList = function () {
        var _this = this;
        console.log("here the call has reached");
        this.groupsRequest.fetchNext().then(function (groupList) {
            /* groupList will be the list of Group class */
            console.log("Groups list fetched successfully", groupList);
            _this.groupListArray = groupList;
            /* you can display the list of groups available using groupList */
        }, function (error) {
            console.log("Groups list fetching failed with error", error);
        });
    };
    Tab2Page.prototype.loadNextGroups = function (event) {
        var _this = this;
        console.log("here the next users are loaded");
        this.groupsRequest.fetchNext().then(function (groupList) {
            /* groupList will be the list of Group class */
            console.log("Groups list fetched successfully", groupList);
            if (groupList != "") {
                _this.groupListArray = _this.groupListArray.concat(groupList);
            }
            event.target.complete();
            /* you can display the list of groups available using groupList */
        }, function (error) {
            console.log("Next Groups list fetching failed with error", error);
        });
    };
    Tab2Page.prototype.tappedOnItems = function (event, group) {
        var _this = this;
        console.log("here tappedOnItems " + group);
        this.groupData = group;
        console.log("{{group.name}}");
        var groupType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].GROUP_TYPE.PUBLIC;
        if (group.hasJoined == false) {
            _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].joinGroup(group.guid, group.type, "").then(function (group) {
                console.log("Group joined successfully:", group);
                var navigationExtras = {
                    state: {
                        group: _this.groupData
                    }
                };
                _this.router.navigate(['groupchat-view'], navigationExtras);
            }, function (error) {
                console.log("Group joining failed with exception:", error);
            });
        }
        else {
            var navigationExtras = {
                state: {
                    group: this.groupData
                }
            };
            this.router.navigate(['groupchat-view'], navigationExtras);
        }
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/pages/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/pages/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map