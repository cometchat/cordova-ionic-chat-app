import { Component, OnInit, ViewChild } from '@angular/core';
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
  loggedInUserData : any = CometChat.getLoggedinUser();

  constructor(private router: Router, private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {

      console.log('params: ',params);

      if(this.router.getCurrentNavigation().extras.state){
        this.currentData = this.router.getCurrentNavigation().extras.state.user;
       
      }

    })
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
  this.messagesRequest = new CometChat.MessagesRequestBuilder().setLimit(limit).setUID(this.currentData.uid).build();
  this.loadMessages();
  this.addMessageEventListner();
}

loadMessages(){

  this.messagesRequest.fetchPrevious().then(
    messages => {
      console.log("Message list fetched:", messages);
      // Handle the list of messages
      this.userMessages = messages;
      // this.userMessages.prepend(messages);
      console.log("UserMessages are ",this.userMessages);
      //this.content.scrollToBottom(1500);
      this.moveToBottom();
    },
    error => {
      console.log("Message fetching failed with error:", error);
    }
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

    var listenerID = "OneOnOneMessage";

      CometChat.addMessageListener(listenerID, new CometChat.MessageListener({
      onTextMessageReceived: textMessage => {
      console.log("Text message successfully", textMessage);
      if (textMessage.receiverID == this.loggedInUserData.uid){
        this.userMessages.push(textMessage);
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
      }
      
    })
    );

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

}
