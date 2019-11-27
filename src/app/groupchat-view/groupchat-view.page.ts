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
      // this.renderer2.setStyle(html, 'height','101vh');
      this.moveToBottom();
    });

    this.keyboard.onKeyboardShow().subscribe(() => {
      // this.renderer2.setStyle(html, 'height','auto');
      this.moveToBottom();
    });

    this.route.queryParams.subscribe(params => {

      console.log('params: ', params);

      if (this.router.getCurrentNavigation().extras.state) {
        this.currentGroupData = this.router.getCurrentNavigation().extras.state.group;
      }

    });
  }

  ionViewWillEnter(): void {
    setTimeout(() => {
      console.log('scrolled caled');
      this.content.scrollToBottom(300);
    }, 2000);
  }

  ngOnInit() {
    const  limit = 30;
    console.log('data of currentGroupData is ', this.currentGroupData);
    const guid: string = this.currentGroupData['guid'];
    console.log('guid ', guid);
    this.messagesRequest = new CometChat.MessagesRequestBuilder().setLimit(limit).setGUID(this.currentGroupData.guid).build();
    this.loadMessages();
    this.addMessageEventListner();
    this.addTypingListner();
    this.currentTypingUserIndicator = '';
    CometChat.getLoggedinUser().then(user => {
      console.log('user is ', user);
      this.loggedInUserData = user;
    }, error => {
      console.log('error getting details:', {error});
    });
  }

  loadMessages() {

    this.messagesRequest.fetchPrevious().then(
      messages => {
        console.log('Message list fetched:', messages);
        // Handle the list of messages
        this.groupMessages = messages;
        // this.userMessages.prepend(messages);
        console.log('groupMessages are ', this.groupMessages);
        // this.content.scrollToBottom(1500);
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
        // Handle the list of messages
        const newMessages = messages;
        // this.userMessages = messages;
        // this.userMessages.prepend(messages);

        if (newMessages !== '') {
          this.groupMessages = newMessages.concat(this.groupMessages);
        }

        console.log('UserMessages are ', this.groupMessages);
        // this.content.scrollToBottom(1500);
      },
      error => {
        console.log('Message fetching failed with error:', error);
      }
    );
  }

  moveToBottom() {
    console.log('here moving to bottom');
    this.content.scrollToBottom(2000);
  }

  logScrollStart() {
    console.log('logScrollStart : When Scroll Starts');
  }

  logScrolling($event) {
    console.log('logScrolling : When Scrolling ', $event.detail.scrollTop);
    if ($event.detail.scrollTop === 0) {
      console.log('scroll reached to top');
      this.loadPreviousMessages();
    }
  }

  logScrollEnd() {
    console.log('logScrollEnd : When Scroll Ends');
  }

  addMessageEventListner() {

    const listenerID = 'GroupMessage';

      CometChat.addMessageListener(listenerID, new CometChat.MessageListener({
      onTextMessageReceived: textMessage => {
      console.log('Text message successfully', textMessage);
      if (textMessage.receiverID !== this.loggedInUserData.uid) {
        this.groupMessages.push(textMessage);
        this.moveToBottom();
      }

        console.log('here uid ', textMessage.sender.uid);
        console.log('logged userID ', this.loggedInUserData.uid);

      // Handle text message
      },
      onMediaMessageReceived: mediaMessage => {
      console.log('Media message received successfully',  mediaMessage);
      // Handle media message
      },
      onCutomMessageReceived: customMessage => {
      console.log('Media message received successfully',  customMessage);
      // Handle media message
      }

    })
    );

  }

  addTypingListner() {

    const listenerId = 'GroupTypingListner';

    CometChat.addMessageListener(listenerId, new CometChat.MessageListener({
      onTypingStarted: (typingIndicator) => {
        console.log('Typing started :', typingIndicator);
        console.log('Typing uid :', typingIndicator.sender.uid);
        if (typingIndicator.sender.uid !== this.loggedInUserData.uid) {
          console.log('update the indicators');

          const name = typingIndicator.sender.name + ' is typing...';
          this.currentTypingUserIndicator = name;

          // if (this.currentTypingUserIndicator != "") {
          //   var name = typingIndicator.sender.name+", "+this.currentTypingUserIndicator;
          //   this.currentTypingUserIndicator = name;
          // }else{
          //   var name = typingIndicator.sender.name+" is typing...";
          //   this.currentTypingUserIndicator = name;
          // }

          // var name = typingIndicator.sender.name+" is typing...";
          // this.currentTypingUserIndicator = name;
        }

      },
      onTypingEnded: (typingIndicator) => {
        console.log('Typing ended :', typingIndicator);
        console.log('onTypingEnded uid :', typingIndicator.sender.uid);
        if (typingIndicator.sender.uid !== this.loggedInUserData.uid) {
          this.currentTypingUserIndicator = '';
        }
      }
    }));

  }

  sendMessage() {

    console.log('tapped on send Message ', this.messageText );
    if (this.messageText !== '') {

      const messageType = CometChat.MESSAGE_TYPE.TEXT;
      const receiverType = CometChat.RECEIVER_TYPE.GROUP;

      const textMessage = new CometChat.TextMessage(this.currentGroupData.guid, this.messageText, receiverType);

      CometChat.sendMessage(textMessage).then(
        message => {
        console.log('Message sent successfully:', message);
        // Text Message Sent Successfully
        // this.groupMessages.push(message);
        this.messageText = '';
        // this.content.scrollToBottom(1500);
        this.moveToBottom();
        },
      error => {
        console.log('Message sending failed with error:', error);
        }
      );

    }
  }

  checkBlur() {
    console.log('checkBlur called');
    const receiverId = this.currentGroupData.guid;
    const receiverType = CometChat.RECEIVER_TYPE.GROUP;

    const typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
    CometChat.endTyping(typingNotification);
  }

  checkFocus() {
    console.log('checkFocus called');
  }

  checkInput() {
    console.log('checkInput called');
    const receiverId = this.currentGroupData.guid;
    const receiverType = CometChat.RECEIVER_TYPE.GROUP;

    const typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
    CometChat.startTyping(typingNotification);
  }

}
