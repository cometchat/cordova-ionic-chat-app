import { Component, OnInit, ViewChild} from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import {Renderer2} from '@angular/core';

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
  currentTypingUserIndicator: any;
  public messageText: string;
  loggedInUserData: any;

  @ViewChild('content') content: any;

  constructor(private router: Router, private route: ActivatedRoute, private keyboard: Keyboard, private renderer2: Renderer2) {

    const html = document.getElementsByTagName('html').item(0);
    this.keyboard.onKeyboardHide().subscribe(() => {
      this.moveToBottom();
    });

    this.keyboard.onKeyboardShow().subscribe(() => {
      this.moveToBottom();
    });

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.currentGroupData = this.router.getCurrentNavigation().extras.state.group;
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
    const guid: string = this.currentGroupData['guid'];
    this.messagesRequest = new CometChat.MessagesRequestBuilder().setLimit(limit).setGUID(this.currentGroupData.guid).build();
    this.loadMessages();
    this.addMessageEventListner();
    this.addTypingListner();
    this.currentTypingUserIndicator = '';
    CometChat.getLoggedinUser().then(user => {
      this.loggedInUserData = user;
    }, error => {
      console.log('error getting details:', {error});
    });
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
        console.log('Message list fetched:', messages);
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

  logScrollStart() {
    console.log('logScrollStart : When Scroll Starts');
  }

  logScrolling($event) {
    console.log('logScrolling : When Scrolling ', $event.detail.scrollTop);
    if ($event.detail.scrollTop === 0) {
      this.loadPreviousMessages();
    }
  }

  logScrollEnd() {
    console.log('logScrollEnd : When Scroll Ends');
  }

  addMessageEventListner() {

    const listenerID = 'GroupMessage';

    CometChat.addMessageListener(
      listenerID, 
      new CometChat.MessageListener({
        onTextMessageReceived: textMessage => {
        if (textMessage.receiverId === this.currentGroupData.guid) {
          this.groupMessages.push(textMessage);
          this.moveToBottom();
        }
        },
        onMediaMessageReceived: mediaMessage => {
          // Handle media message
        },
        onCutomMessageReceived: customMessage => {
          // Handle media message
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
          if (typingIndicator.sender.uid !== this.loggedInUserData.uid) {
            const name = typingIndicator.sender.name + ' is typing...';
            this.currentTypingUserIndicator = name;
          }
        },
        onTypingEnded: (typingIndicator) => {
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
    const receiverId = this.currentGroupData.guid;
    const receiverType = CometChat.RECEIVER_TYPE.GROUP;
    const typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
    CometChat.endTyping(typingNotification);
  }

  checkFocus() {
    console.log('checkFocus called');
  }

  checkInput() {
    const receiverId = this.currentGroupData.guid;
    const receiverType = CometChat.RECEIVER_TYPE.GROUP;
    const typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
    CometChat.startTyping(typingNotification);
  }

}
