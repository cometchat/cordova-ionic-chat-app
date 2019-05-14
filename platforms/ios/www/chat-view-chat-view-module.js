(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-view-chat-view-module"],{

/***/ "./src/app/chat-view/chat-view.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat-view/chat-view.module.ts ***!
  \***********************************************/
/*! exports provided: ChatViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatViewPageModule", function() { return ChatViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-view.page */ "./src/app/chat-view/chat-view.page.ts");







var routes = [
    {
        path: '',
        component: _chat_view_page__WEBPACK_IMPORTED_MODULE_6__["ChatViewPage"]
    }
];
var ChatViewPageModule = /** @class */ (function () {
    function ChatViewPageModule() {
    }
    ChatViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_view_page__WEBPACK_IMPORTED_MODULE_6__["ChatViewPage"]]
        })
    ], ChatViewPageModule);
    return ChatViewPageModule;
}());



/***/ }),

/***/ "./src/app/chat-view/chat-view.page.html":
/*!***********************************************!*\
  !*** ./src/app/chat-view/chat-view.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>\n      <div class=\"Inline\"><img src=\"{{currentData.avatar || 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1' }}\" class=\"circular\"></div>\n      <div class=\"Inline\"><span style=\"padding:5px;\" >{{currentData.name}}</span></div>\n      <p style=\"margin: 0px; font-size: small; padding-bottom: 2px;\">{{currentUserStatus}}</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding #content [scrollEvents]=\"true\" (ionScrollStart)=\"logScrollStart()\" (ionScroll)=\"logScrolling($event)\" (ionScrollEnd)=\"logScrollEnd()\">\n\t<ion-list>\t\n\t<div class=\"chat\" *ngFor=\"let message of userMessages\">\n\t\t\t<!--{{myFunction(message)}}-->\n\t\t<span [class]=\"message.sender.uid === currentData.uid ? 'message me' : 'message you'\">{{message.text}}\n\t\t<!-- <img src=\"https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1\" [class]=\"message.sender.uid === currentData.uid ? 'hideTicks' : 'showTicks'\" style=\"width: 23px; height: 11px; margin-bottom: -5px;\"> -->\n\t\t</span>\n\t\t<span class=\"imgSpan\"> \n\t\t<img src=\"{{(message.deliveredAt && message.deliveredAt > 0) ? (message.readAt && message.readAt > 0) ? ('../assets/readAt.png') : ('../assets/deliveredAt.png') : 'https://2.bp.blogspot.com/-XItmlQeH_-4/Vj9iojIcOHI/AAAAAAAA-f8/mU7SLoGV8Lk/s320/Single%2BTick%2BCheck%2BMark%2BPHOTO.jpg'}}\" [class]=\"message.sender.uid === currentData.uid ? 'hideTicks' : 'showTicks'\" style=\"width: 11px; height: 11px; margin-bottom: -5px;\">\n\t\t</span>\n\t</div>\n\t</ion-list>\n</ion-content>\n<ion-footer no-border>\n\t<ion-toolbar>\n\t\t<div class=\"bar bar-footer bar-balanced chat-box-container\">\n      \t\t<ion-input class=\"chat-editor-box\" placeholder=\"Type Your Message Here..\" type=\"text\" [(ngModel)]=\"messageText\" (ionBlur)=\"checkBlur()\"\n\t\t\t\t\t(ionFocus)=\"checkFocus()\" (ionInput)=\"checkInput()\"></ion-input>\n      \t\t<div class=\"btnSendChatView\">\n\t\t\t\t<button item-right clear (click)='sendMessage()' class = \"btnSendChatView\">\n\t\t\t\t  <ion-icon name=\"send\" class=\"btnSendChat\"></ion-icon>\n\t\t\t\t</button>\n\t\t\t  </div>\n\t\t</div>\n\t</ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/chat-view/chat-view.page.scss":
/*!***********************************************!*\
  !*** ./src/app/chat-view/chat-view.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  max-width: 25px;\n  max-height: 25px; }\n\n.circular {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%; }\n\n.Inline {\n  display: inline-flex;\n  vertical-align: middle; }\n\n.chat-box-container {\n  position: fixed;\n  bottom: 2px;\n  display: inline-flex;\n  padding: 0 7px 0 0px;\n  background: white;\n  width: 100%; }\n\n.chat-editor-box {\n  display: inline-flex;\n  justify-items: center;\n  background: white;\n  align-content: center;\n  align-items: center;\n  border: 1px solid #ccc;\n  border-radius: 24px;\n  padding-left: 4px !important;\n  font-size: 14px;\n  min-height: 38px;\n  max-height: 100px; }\n\n.btnSendChatView {\n  height: 38px;\n  width: 38px;\n  margin-left: 4px;\n  background: #2636be;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  vertical-align: middle;\n  border-radius: 50%; }\n\n.btnSendChat {\n  height: 24px;\n  width: 24px; }\n\n.chat {\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column; }\n\n.message {\n  margin: 0.2em 0;\n  padding: 0.5em;\n  max-width: 70%; }\n\n.me {\n  align-self: flex-start;\n  background-color: #F1F0F0;\n  color: black;\n  border-radius: 10px 10px 10px 0px; }\n\n.you {\n  align-self: flex-end;\n  background-color: #2636be;\n  color: white;\n  border-radius: 10px 10px 0px 10px;\n  display: inline-block;\n  margin-right: 13px; }\n\n.showTicks {\n  display: block; }\n\n.hideTicks {\n  display: none; }\n\n.imgSpan {\n  align-self: flex-end;\n  display: inline-block;\n  position: relative;\n  top: -15px;\n  left: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbnMtMTUvRG9jdW1lbnRzL0NvbWV0Q2hhdC1Jb25pYy9Db21ldENoYXRQUk8tSW9uaWNTYW1wbGVBcHAvc3JjL2FwcC9jaGF0LXZpZXcvY2hhdC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxXQUFVO0VBQ1YsWUFBVztFQUVYLGtCQUFrQixFQUFBOztBQUd0QjtFQUVJLG9CQUFvQjtFQUNwQixzQkFBc0IsRUFBQTs7QUFJMUI7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFJckI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3RCO0VBQ0EsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2Q7RUFDQSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQ0FBaUMsRUFBQTs7QUFHakM7RUFDQSxvQkFBb0I7RUFDcEIseUJBQXdCO0VBQ3hCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUdsQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDdEIsVUFBVTtFQUNWLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQtdmlldy9jaGF0LXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tYXZhdGFyIHtcbiAgICBtYXgtd2lkdGg6IDI1cHg7XG4gICAgbWF4LWhlaWdodDogMjVweDtcbn1cbi5jaXJjdWxhcntcbiAgICB3aWR0aDoyNHB4O1xuICAgIGhlaWdodDoyNHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLklubGluZXtcblxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbn1cblxuLmNoYXQtYm94LWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgcGFkZGluZzogMCA3cHggMCAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY2hhdC1lZGl0b3ItYm94e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWluLWhlaWdodDogMzhweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuXG4uYnRuU2VuZENoYXRWaWV3e1xuICAgIGhlaWdodDogMzhweDtcbiAgICB3aWR0aDogMzhweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIGJhY2tncm91bmQ6ICMyNjM2YmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5idG5TZW5kQ2hhdHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG59XG5cbi5jaGF0IHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIFxuICAgIC5tZXNzYWdlIHtcbiAgICBtYXJnaW46IDAuMmVtIDA7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgfVxuICAgIFxuICAgIC5tZSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMEYwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwcHg7XG4gICAgfVxuICAgIFxuICAgIC55b3Uge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzI2MzZiZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgfVxuXG4gICAgLnNob3dUaWNrc3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmhpZGVUaWNrc3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaW1nU3BhbntcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE1cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/chat-view/chat-view.page.ts":
/*!*********************************************!*\
  !*** ./src/app/chat-view/chat-view.page.ts ***!
  \*********************************************/
/*! exports provided: ChatViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatViewPage", function() { return ChatViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cometchat-pro/chat */ "./node_modules/@cometchat-pro/chat/CometChat.js");
/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__);




var ChatViewPage = /** @class */ (function () {
    function ChatViewPage(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.loggedInUserData = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].getLoggedinUser();
        this.listenerId = "OneOnOneMessageListners";
        this.route.queryParams.subscribe(function (params) {
            console.log('params: ', params);
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.currentData = _this.router.getCurrentNavigation().extras.state.user;
            }
        });
    }
    ChatViewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            console.log("scrolled caled");
            _this.content.scrollToBottom(300);
        }, 2000);
    };
    ChatViewPage.prototype.ngOnInit = function () {
        var _this = this;
        var limit = 30;
        console.log("data of currentData is ", this.currentData);
        var uid = this.currentData["uid"];
        console.log("uid ", uid);
        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].getUser(this.currentData.uid).then(function (user) {
            console.log("User details fetched for user:", user);
            _this.currentData = user;
        }, function (error) {
            console.log("User details fetching failed with error:", error);
        });
        this.messagesRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].MessagesRequestBuilder().setLimit(limit).setUID(this.currentData.uid).build();
        this.loadMessages();
        this.addMessageEventListner();
        //this.addTypingListner();
        //this.addDeliveryReadEventListners();
        this.currentUserStatus = this.currentData.status;
        this.addUserEventListner();
    };
    ChatViewPage.prototype.loadMessages = function () {
        var _this = this;
        this.messagesRequest.fetchPrevious().then(function (messages) {
            console.log("Message list fetched:", messages);
            // Handle the list of messages
            _this.userMessages = messages;
            // this.userMessages.prepend(messages);
            //CometChat.markMessageAsRead(messages);
            console.log("UserMessages are ", _this.userMessages);
            //this.content.scrollToBottom(1500);
            _this.moveToBottom();
        }, function (error) {
            console.log("Message fetching failed with error:", error);
        });
    };
    ChatViewPage.prototype.addUserEventListner = function () {
        var _this = this;
        var listenerID = "UserEventsListner";
        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].addUserListener(listenerID, new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].UserListener({
            onUserOnline: function (onlineUser) {
                /* when someuser/friend comes online, user will be received here */
                console.log("On User Online:", { onlineUser: onlineUser });
                if (onlineUser.uid == _this.currentData.uid) {
                    _this.currentUserStatus = "Online";
                }
            },
            onUserOffline: function (offlineUser) {
                /* when someuser/friend went offline, user will be received here */
                console.log("On User Offline:", { offlineUser: offlineUser });
                if (offlineUser.uid == _this.currentData.uid) {
                    _this.currentUserStatus = "Offline";
                }
            }
        }));
    };
    ChatViewPage.prototype.loadPreviousMessages = function () {
        var _this = this;
        this.messagesRequest.fetchPrevious().then(function (messages) {
            console.log("Message list fetched:", messages);
            // Handle the list of messages
            var newMessages = messages;
            // this.userMessages = messages;
            // this.userMessages.prepend(messages);
            if (newMessages != "") {
                _this.userMessages = newMessages.concat(_this.userMessages);
            }
            console.log("UserMessages are ", _this.userMessages);
            //this.content.scrollToBottom(1500);
        }, function (error) {
            console.log("Message fetching failed with error:", error);
        });
    };
    ChatViewPage.prototype.moveToBottom = function () {
        console.log("here moving to bottom");
        this.content.scrollToBottom(1500);
    };
    ChatViewPage.prototype.logScrollStart = function () {
        console.log("logScrollStart : When Scroll Starts");
    };
    ChatViewPage.prototype.logScrolling = function ($event) {
        console.log("logScrolling : When Scrolling ", $event.detail.scrollTop);
        if ($event.detail.scrollTop == 0) {
            console.log("scroll reached to top");
            this.loadPreviousMessages();
        }
    };
    ChatViewPage.prototype.logScrollEnd = function () {
        console.log("logScrollEnd : When Scroll Ends");
    };
    ChatViewPage.prototype.addMessageEventListner = function () {
        // var listenerID = "OneOnOneMessage";
        var _this = this;
        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].addMessageListener(this.listenerId, new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].MessageListener({
            onTextMessageReceived: function (textMessage) {
                console.log("Text message successfully", textMessage);
                if (textMessage.receiverID == _this.loggedInUserData.uid && textMessage.sender.uid != _this.loggedInUserData.uid) {
                    console.log("here the user has pushed 111");
                    _this.userMessages.push(textMessage);
                    _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].markMessageAsRead(textMessage);
                    _this.moveToBottom();
                }
                // Handle text message
            },
            onMediaMessageReceived: function (mediaMessage) {
                console.log("Media message received successfully", mediaMessage);
                // Handle media message
            },
            onCutomMessageReceived: function (customMessage) {
                console.log("Media message received successfully", customMessage);
                // Handle media message
            }, onMessageDelivered: function (messageReceipt) {
                console.log("MessageDeliverd", { messageReceipt: messageReceipt });
                _this.updateDeliveredAt(messageReceipt);
                _this.messageStatus = "";
            }, onMessageRead: function (messageReceipt) {
                console.log("MessageRead", { messageReceipt: messageReceipt });
                _this.updatedeReadAt(messageReceipt);
                _this.messageStatus = "";
            }, onTypingStarted: function (typingIndicator) {
                console.log("Typing started :", typingIndicator);
                console.log("Typing uid :", typingIndicator.sender.uid);
                if (typingIndicator.sender.uid == _this.currentData.uid) {
                    _this.currentUserStatus = "typing....";
                }
            },
            onTypingEnded: function (typingIndicator) {
                console.log("Typing ended :", typingIndicator);
                console.log("onTypingEnded uid :", typingIndicator.sender.uid);
                if (typingIndicator.sender.uid == _this.currentData.uid) {
                    _this.currentUserStatus = _this.currentData.status;
                }
            }
        }));
    };
    ChatViewPage.prototype.addDeliveryReadEventListners = function () {
        var _this = this;
        var listenerId = "OneOnOneMessageDeliveryReadListners";
        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].addMessageListener("listenerId", new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].MessageListener({
            onMessageDelivered: function (messageReceipt) {
                console.log("MessageDeliverd", { messageReceipt: messageReceipt });
                _this.updateDeliveredAt(messageReceipt);
                _this.messageStatus = "";
            }, onMessageRead: function (messageReceipt) {
                console.log("MessageRead", { messageReceipt: messageReceipt });
                _this.updatedeReadAt(messageReceipt);
                _this.messageStatus = "";
            }
        }));
    };
    ChatViewPage.prototype.addTypingListner = function () {
        var _this = this;
        var listenerId = "OneOnOneTypingListner";
        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].addMessageListener(listenerId, new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].MessageListener({
            onTypingStarted: function (typingIndicator) {
                console.log("Typing started :", typingIndicator);
                console.log("Typing uid :", typingIndicator.sender.uid);
                if (typingIndicator.sender.uid == _this.currentData.uid) {
                    _this.currentUserStatus = "typing....";
                }
            },
            onTypingEnded: function (typingIndicator) {
                console.log("Typing ended :", typingIndicator);
                console.log("onTypingEnded uid :", typingIndicator.sender.uid);
                if (typingIndicator.sender.uid == _this.currentData.uid) {
                    _this.currentUserStatus = _this.currentData.status;
                }
            }
        }));
    };
    ChatViewPage.prototype.sendMessage = function () {
        var _this = this;
        console.log("tapped on send Message ", this.messageText);
        if (this.messageText != "") {
            var messageType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].MESSAGE_TYPE.TEXT;
            var receiverType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].RECEIVER_TYPE.USER;
            var textMessage = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].TextMessage(this.currentData.uid, this.messageText, messageType, receiverType);
            _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].sendMessage(textMessage).then(function (message) {
                console.log("Message sent successfully:", message);
                // Text Message Sent Successfully
                _this.userMessages.push(message);
                _this.messageText = "";
                // this.content.scrollToBottom(1500);
                _this.moveToBottom();
            }, function (error) {
                console.log("Message sending failed with error:", error);
            });
        }
    };
    ChatViewPage.prototype.checkBlur = function () {
        console.log("checkBlur called");
        var receiverId = this.currentData.uid;
        var receiverType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].RECEIVER_TYPE.USER;
        var typingNotification = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].TypingIndicator(receiverId, receiverType);
        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].endTyping(typingNotification);
    };
    ChatViewPage.prototype.checkFocus = function () {
        console.log("checkFocus called");
    };
    ChatViewPage.prototype.checkInput = function () {
        console.log("checkInput called");
        var receiverId = this.currentData.uid;
        var receiverType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].RECEIVER_TYPE.USER;
        var typingNotification = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].TypingIndicator(receiverId, receiverType);
        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_3__["CometChat"].startTyping(typingNotification);
    };
    ChatViewPage.prototype.updatedeReadAt = function (messageReceipt) {
        for (var i = 0; i < this.userMessages.length; i++) {
            if (this.userMessages[i].id == messageReceipt.messageId) {
                console.log("here the Read item is", this.userMessages[i]);
                var timestamp = Number(messageReceipt.timestamp);
                this.userMessages[i].readAt = timestamp;
                console.log("here the readAt is", this.userMessages[i].readAt);
            }
        }
    };
    ChatViewPage.prototype.updateDeliveredAt = function (messageReceipt) {
        for (var i = 0; i < this.userMessages.length; i++) {
            if (this.userMessages[i].id == messageReceipt.messageId) {
                console.log("here the Delivered item is", this.userMessages[i]);
                var timestamp = Number(messageReceipt.timestamp);
                this.userMessages[i].deliveredAt = timestamp;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatViewPage.prototype, "content", void 0);
    ChatViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-view',
            template: __webpack_require__(/*! ./chat-view.page.html */ "./src/app/chat-view/chat-view.page.html"),
            styles: [__webpack_require__(/*! ./chat-view.page.scss */ "./src/app/chat-view/chat-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChatViewPage);
    return ChatViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-view-chat-view-module.js.map