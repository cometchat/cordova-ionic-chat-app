import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Renderer2 } from '@angular/core';
import { Chooser } from '@ionic-native/chooser/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
    selector: 'app-groupchat-view',
    templateUrl: './groupchat-view.page.html',
    styleUrls: ['./groupchat-view.page.scss'],
    providers: [Keyboard],
})

export class GroupchatViewPage implements OnInit {
    currentGroupData: any;
    messagesRequest: any;
    groupMessages: any;
    groupMembers: any;
    currentTypingUserIndicator: any;
    public messageText: string;
    currentUserStatus: any;
    public messageMedia: any;
    loggedInUserData: any;
    messageStatus: any;
    listenerId = 'OneOnOneMessageListners';
    showImage = 0;
    imageUrl = '';

    @ViewChild('content') content: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private keyboard: Keyboard,
        private renderer2: Renderer2,
        private chooser: Chooser,
        private iab: InAppBrowser,
        public actionSheetController: ActionSheetController,
        private imagePicker: ImagePicker,
        public modalController: ModalController
    ) {

        const html = document.getElementsByTagName('html').item(0);

        this.keyboard.onKeyboardHide().subscribe(() => {
            this.moveToBottom();
        });

        this.keyboard.onKeyboardShow().subscribe(() => {
            this.moveToBottom();
        });

        this.route.queryParams.subscribe(
            params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.currentGroupData = this.router.getCurrentNavigation().extras.state.group;
                }
            }
        );
    }

    ionViewWillEnter(): void {
        setTimeout(() => {
            this.content.scrollToBottom(300);
        }, 2000);
    }

    ngOnInit() {
        const limit = 30;
        const guid: string = this.currentGroupData['guid'];
        this.messagesRequest = new CometChat.MessagesRequestBuilder().setLimit(limit).setGUID(guid).build();
        this.loadMessages();
        this.addMessageEventListner();
        this.addTypingListner();
        this.getGroupMembers();
        this.currentTypingUserIndicator = '';
        CometChat.getLoggedinUser().then(
            user => {
                this.loggedInUserData = user;
            }, error => {
                console.log('error getting details:', { error });
            }
        );
        CometChat.getGroup(guid).then(
            group => {
                console.log('group member count', group.getMembersCount());
                var guid = group.getGuid();
                let groupNew = new CometChat.Group('abc', 'abc', 'public');
                groupNew.setGuid(guid);
            }
        )
    }

    getGroupMembers(){
        var GUID = this.currentGroupData['guid'];
        var limit = 30;
        var groupMembersRequest = new CometChat.GroupMembersRequestBuilder(GUID).setLimit(limit).build();
        groupMembersRequest.fetchNext().then(userList => {
            console.log("1", userList);
            this.groupMembers.push(userList);
        });
    }

    initiateCall(type){
        let call = new CometChat.Call(this.currentGroupData.guid, type, 'group');
        CometChat.initiateCall(call).then(
            Call => {
                const navigationExtras: NavigationExtras = {
                    state: {
                        call: Call,
                        enableDefaultLayout: 1,
                        isOutgoingCall: 1,
                        entity: Call.getCallReceiver(),
                        entityType: 'group'
                    }
                };
                this.router.navigate(['calling-screen'], navigationExtras);
            }
        );
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
        const receiverType = CometChat.RECEIVER_TYPE.GROUP;
        const mediaMessage = new CometChat.MediaMessage(this.currentGroupData.guid, this.messageMedia.file, messageType, receiverType);
        CometChat.sendMediaMessage(mediaMessage).then(
            message => {
                this.groupMessages.push(message);
                this.messageMedia = {};
                this.moveToBottom();
            },
            error => {
                console.log('Media message sending failed with error', error);
            }
        );
    }

    loadMessages() {
        this.messagesRequest.fetchPrevious().then(
            messages => {
                this.groupMessages = messages;
                this.moveToBottom();
            },
            error => {
                console.log('Message fetching failed with error:', error);
            }
        );
    }

    loadPreviousMessages() {
        this.messagesRequest.fetchPrevious().then(
            messages => {
                const newMessages = messages;
                if (newMessages !== '') {
                    this.groupMessages = newMessages.concat(this.groupMessages);
                }
            },
            error => {
                console.log('Message fetching failed with error:', error);
            }
        );
    }

    moveToBottom() {
        this.content.scrollToBottom(2000);
    }

    logScrolling($event) {
        if ($event.detail.scrollTop === 0) {
            this.loadPreviousMessages();
        }
    }

    addMessageEventListner() {
        const listenerID = 'GroupMessage';
        CometChat.addMessageListener(
            listenerID,
            new CometChat.MessageListener({
                onTextMessageReceived: textMessage => {
                    console.log('onTextMessageReceived', textMessage);
                    CometChat.CometChatHelper.getConversationFromMessage(textMessage).then(
                        conversation => {
                            console.log('conversation', conversation);
                        }
                    )
                    if (textMessage.receiverId === this.currentGroupData.guid) {
                        this.groupMessages.push(textMessage);
                        this.moveToBottom();
                    }
                },
                onMediaMessageReceived: mediaMessage => {
                    console.log('onMediaMessageReceived', mediaMessage);
                    if (mediaMessage.receiverId === this.currentGroupData.guid) {
                        this.groupMessages.push(mediaMessage);
                        this.moveToBottom();
                    }
                },
                onCutomMessageReceived: customMessage => {
                    console.log('onCutomMessageReceived', customMessage);
                    if (customMessage.receiverId !== this.currentGroupData.guid) {
                        this.groupMessages.push(customMessage);
                        this.moveToBottom();
                    }
                },
                onMessagesDelivered: (messageReceipt: CometChat.MessageReceipt) => {
                    console.log('onMessagesDelivered', messageReceipt);
                },
                onMessagesRead: (messageReceipt: CometChat.MessageReceipt) => {
                    console.log('onMessagesRead', messageReceipt);
                }
            })
        );
    }

    addTypingListner() {
        const listenerId = 'GroupTypingListner';
        CometChat.addMessageListener(
            listenerId,
            new CometChat.MessageListener({
                onTypingStarted: (typingIndicator) => {
                    console.log('onTypingStarted', typingIndicator);
                    if (typingIndicator.sender.uid !== this.loggedInUserData.uid) {
                        const name = typingIndicator.sender.name + ' is typing...';
                        this.currentTypingUserIndicator = name;
                    }
                },
                onTypingEnded: (typingIndicator) => {
                    console.log('onTypingEnded', typingIndicator);
                    if (typingIndicator.sender.uid !== this.loggedInUserData.uid) {
                        this.currentTypingUserIndicator = '';
                    }
                }
            })
        );

    }

    sendMessage() {
        if (this.messageText !== '') {
            const receiverType = CometChat.RECEIVER_TYPE.GROUP;
            const textMessage = new CometChat.TextMessage(this.currentGroupData.guid, this.messageText, receiverType);
            CometChat.sendMessage(textMessage).then(
                message => {
                    console.log('send Message', message);
                    CometChat.CometChatHelper.getConversationFromMessage(message).then(
                        conversation => {
                            console.log('conversation', conversation);
                            this.groupMessages.push(message);
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
        const receiverId = this.currentGroupData.guid;
        const receiverType = CometChat.RECEIVER_TYPE.GROUP;
        const typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
        CometChat.endTyping(typingNotification);
    }

    checkInput() {
        const receiverId = this.currentGroupData.guid;
        const receiverType = CometChat.RECEIVER_TYPE.GROUP;
        const typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
        CometChat.startTyping(typingNotification);
    }

}
