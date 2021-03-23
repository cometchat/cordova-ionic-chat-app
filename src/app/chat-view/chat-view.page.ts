import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  loggedInUserData: any = CometChat.getLoggedinUser();
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
  }

ionViewWillEnter(): void {
    setTimeout(() => {
      this.content.scrollToBottom(300);
  }, 2000);
}

ngOnInit() {
  const  limit = 30;
  const uid: string = this.currentData['uid'];
  CometChat.getUser(this.currentData.uid).then(
    user => {
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
    messages => {
      console.log('Message list fetched:', messages);
      this.userMessages = messages;
      this.sendReadBulkReceipts();
      this.moveToBottom();
    },
    error => {
      console.log('Message fetching failed with error:', error);
    }
  );

}

 addUserEventListner() {
  const listenerID = 'UserEventsListner';

  CometChat.addUserListener(
  listenerID,
  new CometChat.UserListener({
    onUserOnline: onlineUser => {
      if (onlineUser.uid === this.currentData.uid) {
        this.currentUserStatus = 'Online';
      }
    },
    onUserOffline: offlineUser => {
    if (offlineUser.uid === this.currentData.uid) {
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
    messages => {
      const newMessages = messages;
      if (newMessages !== '') {
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

  logScrollStart() {
    console.log('logScrollStart : When Scroll Starts');
  }

  logScrolling($event) {
    if ($event.detail.scrollTop === 0) {
      this.loadPreviousMessages();
    }
  }

  logScrollEnd() {
    console.log('logScrollEnd : When Scroll Ends');
  }

  addMessageEventListner() {
      CometChat.addMessageListener(
        this.listenerId, 
        new CometChat.MessageListener({
        onTextMessageReceived: textMessage => {
          if (textMessage.receiverId === this.loggedInUserData.getUid() && textMessage.sender.uid === this.currentData.uid) {
            this.userMessages.push(textMessage);
            this.sendReadReceipts(textMessage);
            this.moveToBottom();
          }
        },
        onMediaMessageReceived: mediaMessage => {
          // Handle media message
        },
        onCutomMessageReceived: customMessage => {
          // Handle custom message
        }, onMessageDelivered: (messageReceipt) => {
          this.updateDeliveredAt(messageReceipt);
          this.messageStatus = '';
        }, onMessageRead: (messageReceipt) => {
          this.updatedeReadAt(messageReceipt);
          this.messageStatus = '';
        }, onTypingStarted: (typingIndicator) => {
          if (typingIndicator.sender.uid === this.currentData.uid) {
            this.currentUserStatus = 'typing....';
          }
        },
        onTypingEnded: (typingIndicator) => {
          if (typingIndicator.sender.uid === this.currentData.uid) {
            this.currentUserStatus = this.currentData.status;
          }
        }
      })
    );

  }

  addDeliveryReadEventListners() {
    const listenerId = 'OneOnOneMessageDeliveryReadListners';

    CometChat.addMessageListener(
      listenerId, 
      new CometChat.MessageListener({
        onMessageDelivered: (messageReceipt) => {
          this.updateDeliveredAt(messageReceipt);
          this.messageStatus = '';
        }, onMessageRead: (messageReceipt) => {
          this.updatedeReadAt(messageReceipt);
          this.messageStatus = '';
        }
      })
    );
  }

  addTypingListner() {

    const listenerId = 'OneOnOneTypingListner';

    CometChat.addMessageListener(
      listenerId, 
      new CometChat.MessageListener({
        onTypingStarted: (typingIndicator) => {
          if (typingIndicator.sender.uid === this.currentData.uid) {
            this.currentUserStatus = 'typing....';
          }
        },
        onTypingEnded: (typingIndicator) => {
          if (typingIndicator.sender.uid === this.currentData.uid) {
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
        message => {
          this.userMessages.push(message);
          this.messageText = '';
          this.moveToBottom();
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

  checkFocus() {
    console.log('checkFocus called');
  }

  checkInput() {
    const receiverId = this.currentData.uid;
    const receiverType = CometChat.RECEIVER_TYPE.USER;
    const typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
    CometChat.startTyping(typingNotification);
  }


  updatedeReadAt(messageReceipt) {
    for (let i = 0; i < this.userMessages.length; i++) {
      if (this.userMessages[i].id === messageReceipt.messageId) {
        const timestamp = Number(messageReceipt.timestamp);
        this.userMessages[i].readAt = timestamp;
      }
    }
  }

  updateDeliveredAt(messageReceipt) {
    for (let i = 0; i < this.userMessages.length; i++) {
      if ( this.userMessages[i].id === messageReceipt.messageId) {
        const timestamp = Number(messageReceipt.timestamp);
        this.userMessages[i].deliveredAt = timestamp;
      }
    }

  }

  sendReadReceipts(message) {
    for (let i = 0; i < this.userMessages.length; i++) {
      if (this.userMessages[i].id === message.id && this.userMessages[i].sender.uid !== this.loggedInUserData.uid) {
        CometChat.markAsRead(this.userMessages[i].id, this.userMessages[i].sender.uid, this.userMessages[i].receiverType);
      }
    }
  }

  sendReadBulkReceipts() {
    for (let i = 0; i < this.userMessages.length; i++) {
      if (this.userMessages[i].receiver !== this.currentData.uid) {
        CometChat.markAsRead(this.userMessages[i].id, this.userMessages[i].sender.uid, this.userMessages[i].receiverType);
      }
    }
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
          console.log('IMAGE PICKER CLICKED');
          this.ImagePicker();
        }
      },
      {
        text: 'Document',
        handler: () => {
          console.log('DOCUMENT PICKER CLICKED');
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
        name:  'temp_img' + date.getTime()
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
    const bb = new Blob([ab], {type: mimeString});
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
    CometChat.sendMessage(mediaMessage).then(
      message => {
        this.userMessages.push(message);
        this.messageMedia = {};
        this.moveToBottom();
      },
      error => {
        console.log('Media message sending failed with error', error);
      }
    );
  }

  openLink(url) {
    this.iab.create(url, '_system');
  }

}

