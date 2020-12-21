import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';
import { Chooser } from '@ionic-native/chooser/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { ImageViewerComponent } from '../component/image-viewer/image-viewer.component';

@Component({
    selector: 'app-chat-view',
    templateUrl: './chat-view.page.html',
    styleUrls: ['./chat-view.page.scss'],
})

export class ChatViewPage implements OnInit {

    @ViewChild('content') content: any;

    currentData: any;
    messagesRequest: any;
    userMessages: any;
    public messageText: string;
    public messageMedia: any;
    currentUserStatus: any;
    loggedInUserData: CometChat.User;
    messageStatus: any;
    listenerId = 'OneOnOneMessageListners';
    showImage = 0;
    imageUrl = '';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private chooser: Chooser,
        private iab: InAppBrowser,
        public actionSheetController: ActionSheetController,
        private imagePicker: ImagePicker,
        public modalController: ModalController
    ) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.currentData = this.router.getCurrentNavigation().extras.state.user;
            }
        });
        CometChat.getLoggedinUser().then(
            user => {
                if (user) {
                    this.loggedInUserData = user;
                }
            }
        )
    }

    ionViewWillEnter(): void {
        setTimeout(() => {
            this.content.scrollToBottom(300);
        }, 2000);
    }

    ionViewWillLeave(): void {
        CometChat.removeMessageListener(this.listenerId);
        CometChat.removeUserListener('UserEventsListner');
    }

    ngOnInit() {
        const limit = 30;
        CometChat.getUser(this.currentData.uid).then(
            (user: CometChat.User) => {
                this.currentData = user;
            },
            error => {
                console.log('User details fetching failed with error:', error);
            }
        );
        this.messagesRequest = new CometChat.MessagesRequestBuilder().setLimit(limit).setUID(this.currentData.uid).build();
        this.loadMessages();
        this.addMessageEventListner();
        this.currentUserStatus = this.currentData.status;
        this.addUserEventListner();
    }

    loadMessages() {
        this.messagesRequest.fetchPrevious().then(
            (messages: CometChat.BaseMessage[]) => {
                this.userMessages = messages;
                if (messages.length > 0) {
                    let lastMessage = messages[messages.length - 1];
                    console.log()
                    if (lastMessage.getReadAt() == null || lastMessage.getReadAt() == undefined) {
                        this.sendReadReceipts(lastMessage);
                        this.moveToBottom();
                    } else {
                        this.moveToBottom();
                    }
                } else {
                    this.moveToBottom();
                }
            },
            error => {
                console.log('Message fetching failed with error:', error);
            }
        );
    }

    initiateCall(type){
        let call = new CometChat.Call(this.currentData.uid, type, 'user');
        CometChat.initiateCall(call).then(
            Call => {
                const navigationExtras: NavigationExtras = {
                    state: {
                        call: Call,
                        enableDefaultLayout: 1,
                        isOutgoingCall: 1,
                        entity: Call.getCallInitiator(),
                        entityType: 'user'
                    }
                };
                this.router.navigate(['calling-screen'], navigationExtras);
            }
        );
    }

    addUserEventListner() {
        const listenerID = 'UserEventsListner';
        CometChat.addUserListener(
            listenerID,
            new CometChat.UserListener({
                onUserOnline: (onlineUser: CometChat.User) => {
                    if (onlineUser.getUid() === this.currentData.uid) {
                        this.currentUserStatus = 'Online';
                    }
                },
                onUserOffline: (offlineUser: CometChat.User) => {
                    if (offlineUser.getUid() === this.currentData.uid) {
                        this.currentUserStatus = 'Offline';
                    }
                }
            })
        );
    }

    async viewImage(src: string) {
        const modal = await this.modalController.create({
            component: ImageViewerComponent,
            componentProps: {
                imgSource: src
            },
            cssClass: 'modal-fullscreen',
            keyboardClose: true,
            showBackdrop: true
        });

        return await modal.present();
    }

    loadPreviousMessages() {
        this.messagesRequest.fetchPrevious().then(
            (messages: CometChat.BaseMessage[]) => {
                const newMessages = messages;
                if (newMessages.length > 0) {
                    this.userMessages = newMessages.concat(this.userMessages);
                }
            },
            error => {
                console.log('Message fetching failed with error:', error);
            }
        );
    }

    moveToBottom() {
        this.content.scrollToBottom(1500);
    }

    logScrolling($event) {
        if ($event.detail.scrollTop === 0) {
            this.loadPreviousMessages();
        }
    }

    addMessageEventListner() {
        CometChat.addMessageListener(
            this.listenerId,
            new CometChat.MessageListener({
                onTextMessageReceived: textMessage => {
                    console.log('CC: onTextMessageReceived', textMessage);
                    CometChat.CometChatHelper.getConversationFromMessage(textMessage).then(
                        conversation => {
                            console.log('conversation', conversation);
                        }
                    )
                    if (textMessage.receiverId === this.loggedInUserData.getUid()) {
                        this.userMessages.push(textMessage);
                        this.sendReadReceipts(textMessage);
                        this.moveToBottom();
                    }
                },
                onMediaMessageReceived: (mediaMessage) => {
                    console.log('CC: onMediaMessageReceived', mediaMessage);
                    if (mediaMessage.receiverId === this.loggedInUserData.getUid()) {
                        this.userMessages.push(mediaMessage);
                        this.sendReadReceipts(mediaMessage);
                        this.moveToBottom();
                    }
                },
                onCutomMessageReceived: (customMessage) => {
                    console.log('CC: onCutomMessageReceived', customMessage);
                    if (customMessage.receiverId === this.loggedInUserData.getUid()) {
                        this.userMessages.push(customMessage);
                        this.sendReadReceipts(customMessage);
                        this.moveToBottom();
                    }
                },
                onMessagesDelivered: (messageReceipt: CometChat.MessageReceipt) => {
                    console.log('CC: onMessagesDelivered', messageReceipt);
                    this.updateDeliveredAt(messageReceipt);
                    this.messageStatus = '';
                },
                onMessagesRead: (messageReceipt: CometChat.MessageReceipt) => {
                    console.log('CC: onMessagesRead', messageReceipt);
                    this.updateReadAt(messageReceipt);
                    this.messageStatus = '';
                },
                onTypingStarted: (typingIndicator: CometChat.TypingIndicator) => {
                    console.log('CC: onTypingStarted', typingIndicator);
                    if (typingIndicator.getSender().getUid() === this.currentData.uid) {
                        this.currentUserStatus = 'typing....';
                    }
                },
                onTypingEnded: (typingIndicator: CometChat.TypingIndicator) => {
                    console.log('CC: onTypingEnded', typingIndicator);
                    if (typingIndicator.getSender().getUid() === this.currentData.uid) {
                        this.currentUserStatus = this.currentData.status;
                    }
                }
            })
        );
    }

    sendMessage() {
        if (this.messageText !== '') {
            const receiverType = CometChat.RECEIVER_TYPE.USER;
            const textMessage = new CometChat.TextMessage(this.currentData.uid, this.messageText, receiverType);
            CometChat.sendMessage(textMessage).then(
                (message: CometChat.TextMessage) => {
                    console.log('send Message', message);
                    CometChat.CometChatHelper.getConversationFromMessage(message).then(
                        conversation => {
                            console.log('conversation', conversation);
                            this.userMessages.push(message);
                            this.messageText = '';
                            this.moveToBottom();
                        }
                    )
                },
                error => {
                    console.log('Message sending failed with error:', error);
                }
            );
        }
    }

    checkBlur() {
        const receiverId = this.currentData.uid;
        const receiverType = CometChat.RECEIVER_TYPE.USER;
        const typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
        CometChat.endTyping(typingNotification);
    }

    checkInput() {
        const receiverId = this.currentData.uid;
        const receiverType = CometChat.RECEIVER_TYPE.USER;
        const typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
        CometChat.startTyping(typingNotification);
    }


    updateReadAt(messageReceipt: CometChat.MessageReceipt) {
        for (let i = 0; i < this.userMessages.length; i++) {
            if (this.userMessages[i].getId().toString() === messageReceipt.getMessageId()) {
                let message: CometChat.BaseMessage = this.userMessages[i];
                console.log(messageReceipt.getTimestamp());
                let timestamp: number = Number(messageReceipt.getTimestamp());
                message.setReadAt(timestamp);
                console.log(message.getReadAt());
            }
        }
    }

    updateDeliveredAt(messageReceipt: CometChat.MessageReceipt) {
        for (let i = 0; i < this.userMessages.length; i++) {
            if (this.userMessages[i].getId().toString() === messageReceipt.getMessageId()) {
                const timestamp = Number(messageReceipt.getTimestamp());
                this.userMessages[i].setDeliveredAt(timestamp);
            }
        }
    }

    sendReadReceipts(message: CometChat.BaseMessage) {
        CometChat.markAsRead(message.getId().toString(), message.getSender().getUid(), message.getReceiverType());
    }

    goHome() {
        this.router.navigate(['tabs']);
    }

    async showActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Actions',
            buttons: [{
                text: 'Image',
                handler: () => {
                    this.ImagePicker();
                }
            },
            {
                text: 'Document',
                handler: () => {
                    this.DocumentPicker();
                }
            },
            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }

    DocumentPicker() {
        this.chooser.getFile('all')
            .then(response => {
                const blob_nw = this.dataURItoBlob(response.dataURI);
                const file = {
                    file: blob_nw,
                    type: response.mediaType,
                    name: response.name
                };
                this.messageMedia = file;
                this.sendMediaMessage();
            })
            .catch(e => console.log(e));
    }

    ImagePicker() {
        const options = {
            outputType: 1
        };
        this.imagePicker.getPictures(options)
            .then((results) => {
                results[0] = 'data:image/jpeg;base64,' + results[0];
                const blob_nw = this.dataURItoBlob(results[0]);
                const date = new Date();
                const file = {
                    file: blob_nw,
                    type: 'image/jpeg',
                    name: 'temp_img' + date.getTime()
                };
                this.messageMedia = file;
                this.sendMediaMessage();
            }, (err) => {
                console.log(err);
            });
    }

    dataURItoBlob(dataURI) {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const bb = new Blob([ab], { type: mimeString });
        return bb;
    }

    sendMediaMessage() {
        let messageType = CometChat.MESSAGE_TYPE.IMAGE;
        if (this.messageMedia.type.split('/')[0] === 'image') {
            messageType = CometChat.MESSAGE_TYPE.IMAGE;
        } else if (this.messageMedia.type.split('/')[0] === 'video') {
            messageType = CometChat.MESSAGE_TYPE.VIDEO;
        } else {
            messageType = CometChat.MESSAGE_TYPE.FILE;
        }
        const receiverType = CometChat.RECEIVER_TYPE.USER;
        const mediaMessage = new CometChat.MediaMessage(this.currentData.uid, this.messageMedia.file, messageType, receiverType);
        
        let metadata = {
            caption: true,
            captionText: 'Caption'
        };

        let caption = metadata.captionText;

        mediaMessage.setMetadata(metadata);

        mediaMessage.setCaption(caption);

        CometChat.sendMediaMessage(mediaMessage).then(
            (message: CometChat.MediaMessage) => {
                console.log('message sent', message);
                this.userMessages.push(message);
                this.messageMedia = {};
                this.moveToBottom();
            }, error => {
                console.log('Media message sending failed with error', error);
            }
        );
    }

    openLink(url) {
        this.iab.create(url, '_system');
    }

}
