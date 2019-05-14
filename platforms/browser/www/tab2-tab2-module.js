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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Groups</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <div *ngFor=\"let group of groupListArray\">\n            <ion-item (click)=\"tappedOnItems($event, group)\">\n                <ion-avatar slot=\"start\">\n                  <img src=\"{{group.icon || 'https://pbs.twimg.com/profile_images/857490466572443648/c05JqEgo_400x400.jpg' }}\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{group.name}}</h2>\n                    <ion-note><h3>{{group.description}}</h3></ion-note>\n                </ion-label> \n            </ion-item>\n          </div>\n    </ion-list>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadNextGroups($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"dots\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

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