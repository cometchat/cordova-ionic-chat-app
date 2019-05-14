import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CometChat, User, Message } from '@cometchat-pro/chat';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.page.html',
  styleUrls: ['./chat-view.page.scss'],
})

export class ChatViewPage implements OnInit {
  
  @ViewChild('content') content: any;

  currentData : any;
  messagesRequest : any;
  userMessages:any;
  public messageText : string;
  currentUserStatus : any;
  loggedInUserData : any = CometChat.getLoggedinUser();
  messageStatus : any;
  listenerId="OneOnOneMessageListners";

  constructor(private router: Router, private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {

      console.log('params: ',params);

      if(this.router.getCurrentNavigation().extras.state){
        this.currentData = this.router.getCurrentNavigation().extras.state.user;

      }

    });

  }

ionViewWillEnter(): void {
    setTimeout(() => {
      console.log("scrolled caled");
      this.content.scrollToBottom(300);
      
  }, 2000);
}

ngOnInit() {
  var  limit = 30;
  console.log("data of currentData is ",this.currentData);
  var uid : string= this.currentData["uid"];
  console.log("uid ",uid);
  
  CometChat.getUser(this.currentData.uid).then(
  user => {
    console.log("User details fetched for user:", user);
    this.currentData = user
  },
  error => {
    console.log("User details fetching failed with error:", error);
  }
  );
  this.messagesRequest = new CometChat.MessagesRequestBuilder().setLimit(limit).setUID(this.currentData.uid).build();
  this.loadMessages();
  this.addMessageEventListner();
  //this.addTypingListner();
  //this.addDeliveryReadEventListners();
  this.currentUserStatus = this.currentData.status;
  this.addUserEventListner();

  
}

loadMessages(){

  this.messagesRequest.fetchPrevious().then(
    messages => {
      console.log("Message list fetched:", messages);
      // Handle the list of messages
      this.userMessages = messages;
      // this.userMessages.prepend(messages);
      //CometChat.markMessageAsRead(messages);
      console.log("UserMessages are ",this.userMessages);
      //this.content.scrollToBottom(1500);
      this.sendReadBulkReceipts();
      this.moveToBottom();
    },
    error => {
      console.log("Message fetching failed with error:", error);
    }
  );

}

 addUserEventListner() {
  var listenerID = "UserEventsListner";

  CometChat.addUserListener(
  listenerID,
  new CometChat.UserListener({
    onUserOnline: onlineUser => {
    /* when someuser/friend comes online, user will be received here */
      console.log("On User Online:", { onlineUser });
      if (onlineUser.uid == this.currentData.uid){
        this.currentUserStatus = "Online";
      }
    },
    onUserOffline: offlineUser => {
    /* when someuser/friend went offline, user will be received here */
    console.log("On User Offline:", { offlineUser });
    if (offlineUser.uid == this.currentData.uid){
      this.currentUserStatus = "Offline";
    }
    }
  })
  );
}

loadPreviousMessages(){
  this.messagesRequest.fetchPrevious().then(
    messages => {
      console.log("Message list fetched:", messages);
      // Handle the list of messages
      var newMessages = messages; 
      // this.userMessages = messages;
      // this.userMessages.prepend(messages);

      if (newMessages != ""){
        this.userMessages = newMessages.concat(this.userMessages);
      }

      console.log("UserMessages are ",this.userMessages);
      //this.content.scrollToBottom(1500);
    },
    error => {
      console.log("Message fetching failed with error:", error);
    }
  );
}

  moveToBottom(){
    console.log("here moving to bottom");
    this.content.scrollToBottom(1500);
    
  }

  logScrollStart(){
    console.log("logScrollStart : When Scroll Starts");
  }

  logScrolling($event){
    console.log("logScrolling : When Scrolling ",$event.detail.scrollTop);
    if($event.detail.scrollTop == 0){
      console.log("scroll reached to top");
      this.loadPreviousMessages();
    }
  }

  logScrollEnd(){
    console.log("logScrollEnd : When Scroll Ends");
  }

  addMessageEventListner(){

    // var listenerID = "OneOnOneMessage";

      CometChat.addMessageListener(this.listenerId, new CometChat.MessageListener({
      onTextMessageReceived: textMessage => {
      console.log("Text message successfully", textMessage);
      if (textMessage.receiverID == this.loggedInUserData.uid && textMessage.sender.uid != this.loggedInUserData.uid){
        console.log("here the user has pushed 111");
        this.userMessages.push(textMessage);
        // CometChat.markMessageAsRead(textMessage);
        this.sendReadReceipts(textMessage);
        this.moveToBottom();
      }
      
      // Handle text message
      },
      onMediaMessageReceived: mediaMessage => {
      console.log("Media message received successfully",  mediaMessage);
      // Handle media message
      },
      onCutomMessageReceived: customMessage => {
      console.log("Media message received successfully",  customMessage);
      // Handle media message
      },onMessageDelivered: (messageReceipt) => {
        console.log("MessageDeliverd", {messageReceipt});
        this.updateDeliveredAt(messageReceipt);
        this.messageStatus = ""
      },onMessageRead: (messageReceipt) => {
        console.log("MessageRead", {messageReceipt});
        this.updatedeReadAt(messageReceipt);
        this.messageStatus = ""
      },onTypingStarted: (typingIndicator) => {
        console.log("Typing started :", typingIndicator);
        console.log("Typing uid :",typingIndicator.sender.uid);
        if (typingIndicator.sender.uid == this.currentData.uid){
          this.currentUserStatus = "typing...."
        }
      },
      onTypingEnded: (typingIndicator) => {
        console.log("Typing ended :", typingIndicator);
        console.log("onTypingEnded uid :",typingIndicator.sender.uid);
        if (typingIndicator.sender.uid == this.currentData.uid){
          this.currentUserStatus = this.currentData.status;
        }
      }
      
    })
    
    );

  }

  addDeliveryReadEventListners(){
    let listenerId="OneOnOneMessageDeliveryReadListners";

    CometChat.addMessageListener("listenerId", new CometChat.MessageListener({
      onMessageDelivered: (messageReceipt) => {
        console.log("MessageDeliverd", {messageReceipt});
        this.updateDeliveredAt(messageReceipt);
        this.messageStatus = ""
      },onMessageRead: (messageReceipt) => {
        console.log("MessageRead", {messageReceipt});
        this.updatedeReadAt(messageReceipt);
        this.messageStatus = ""
      }
    }));
  }

  addTypingListner() {

    let listenerId="OneOnOneTypingListner";

    CometChat.addMessageListener(listenerId, new CometChat.MessageListener({
      onTypingStarted: (typingIndicator) => {
        console.log("Typing started :", typingIndicator);
        console.log("Typing uid :",typingIndicator.sender.uid);
        if (typingIndicator.sender.uid == this.currentData.uid){
          this.currentUserStatus = "typing...."
        }
      },
      onTypingEnded: (typingIndicator) => {
        console.log("Typing ended :", typingIndicator);
        console.log("onTypingEnded uid :",typingIndicator.sender.uid);
        if (typingIndicator.sender.uid == this.currentData.uid){
          this.currentUserStatus = this.currentData.status;
        }
      }
    }));

  }

  sendMessage(){

    console.log("tapped on send Message ",this.messageText );
    if (this.messageText != ""){

      var messageType = CometChat.MESSAGE_TYPE.TEXT;
      var receiverType = CometChat.RECEIVER_TYPE.USER;

      var textMessage = new CometChat.TextMessage(this.currentData.uid, this.messageText, messageType, receiverType);

      CometChat.sendMessage(textMessage).then(
        message => {
        console.log("Message sent successfully:", message);
        // Text Message Sent Successfully
        this.userMessages.push(message);
        this.messageText = "";
        // this.content.scrollToBottom(1500);
        this.moveToBottom();
        },
      error => {
        console.log("Message sending failed with error:", error);
        }
      );

    }
  }

  checkBlur(){
    console.log("checkBlur called");
    let receiverId = this.currentData.uid;
    let receiverType = CometChat.RECEIVER_TYPE.USER;

    let typingNotification = new CometChat.TypingIndicator(receiverId,receiverType);
    CometChat.endTyping(typingNotification);
  }

  checkFocus(){
    console.log("checkFocus called");
    
  }

  checkInput(){
    console.log("checkInput called");
    let receiverId = this.currentData.uid;
    let receiverType = CometChat.RECEIVER_TYPE.USER;

    let typingNotification = new CometChat.TypingIndicator(receiverId,receiverType);
    CometChat.startTyping(typingNotification);
  }


  updatedeReadAt(messageReceipt){

    for (let i = 0; i < this.userMessages.length; i++) {
      if(this.userMessages[i].id == messageReceipt.messageId){
        console.log("here the Read item is",this.userMessages[i] );
        var timestamp = Number(messageReceipt.timestamp);
        this.userMessages[i].readAt = timestamp;
        console.log("here the readAt is",this.userMessages[i].readAt);
      }
    }
  }

  updateDeliveredAt(messageReceipt){

    for (let i = 0; i < this.userMessages.length; i++) {
      if(this.userMessages[i].id == messageReceipt.messageId){
        console.log("here the Delivered item is",this.userMessages[i]);
        var timestamp = Number(messageReceipt.timestamp);
        this.userMessages[i].deliveredAt = timestamp;
      }
    }

  }

  sendReadReceipts(message){
    for (let i = 0; i < this.userMessages.length; i++) {
      if(this.userMessages[i].id == message.id && this.userMessages[i].sender.uid != this.loggedInUserData.uid){
        console.log("here the sendReadReceipts item is",this.userMessages[i]);
        CometChat.markMessageAsRead(this.userMessages[i]);
      }
    }
  }

  sendReadBulkReceipts(){
    for (let i = 0; i < this.userMessages.length; i++) {

      if (this.userMessages[i].receiver != this.currentData.uid){
        CometChat.markMessageAsRead(this.userMessages[i]);
      }

    }
  }
  
}

