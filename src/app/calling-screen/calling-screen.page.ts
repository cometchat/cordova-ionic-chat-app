import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calling-screen',
  templateUrl: './calling-screen.page.html',
  styleUrls: ['./calling-screen.page.scss'],
})

export class CallingScreenPage implements OnInit {

  @ViewChild('content') content: any;

  public TAG: String = "CallingScreen";

  Call: CometChat.Call;
  defaultLayout: Boolean;
  isCallOutGoing: Boolean;
  entity: CometChat.User | CometChat.Group;
  entityType: String;
  avatar: String;
  name: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navController: NavController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.Call = this.router.getCurrentNavigation().extras.state.call;
        this.defaultLayout = this.router.getCurrentNavigation().extras.state.enableDefaultLayout;
        this.isCallOutGoing = this.router.getCurrentNavigation().extras.state.isOutgoingCall;
        this.entity = this.router.getCurrentNavigation().extras.state.entity;
        this.entityType = this.router.getCurrentNavigation().extras.state.entityType;
        if(this.isCallOutGoing){
          let receiver: any;
          receiver = this.Call.getCallReceiver();
          this.avatar = receiver.avatar;
          this.name = receiver.name;
          if(this.avatar === '' || this.avatar === undefined || this.avatar === null){
            if(this.entityType === 'user'){
              this.avatar = 'user';
            }else{
              this.avatar = 'group';
            }
          }
        }else{
          let initiator: any;
          if(this.entityType === 'user'){
            initiator = this.Call.getCallInitiator();
          }else{
            initiator = this.Call.getCallReceiver();
          }
          this.avatar = initiator.avatar;
          this.name = initiator.name;
          if(this.avatar === '' || this.avatar === undefined || this.avatar === null){
            if(this.entityType === 'user'){
              this.avatar = 'user';
            }else{
              this.avatar = 'group';
            }
          }
        }
      }
    });
  }

  ngOnInit() {
    console.log("Calling Screen Initialized");
    this.addCallListner();
  }

  ngOnDestroy() {
    console.log("Calling Screen Destroyed");
    this.removeCallListner();
  }

  addCallListner(){
    var listnerID = 'CALLING_SCREEN_CALL_LISTENER';
    var that = this;
    CometChat.addCallListener(
      listnerID,
      new CometChat.CallListener({
        onIncomingCallReceived(call) {
          console.log(that.TAG + ":: onIncomingCallReceived");
        },
        onOutgoingCallAccepted(call) {
          console.log(that.TAG + ":: onOutgoingCallAccepted");
          that.goBack();
          that.startCall();
        },
        onOutgoingCallRejected(call) {
          console.log(that.TAG + ":: onOutgoingCallRejected");
          that.goBack();
        },
        onIncomingCallCancelled(call) {
          console.log(that.TAG + ":: onIncomingCallCancelled");
          that.goBack();
        },
      })
    );
  }

  removeCallListner(){
    var listnerID = 'CALLING_SCREEN_CALL_LISTENER';
    CometChat.removeCallListener(listnerID);
  }

  startCall(){
    let sessionID = this.Call.getSessionId();
    let callListener = new CometChat.OngoingCallListener({
      onUserJoined: user => {
        console.log('OngoingCallListener: User joined call:', user.getUid());
      },
      onUserLeft: user => {
        console.log('OngoingCallListener: User left call:', user.getUid());
      },
      onCallEnded: call => {
        console.log('OngoingCallListener: Call ended listener', call.getSessionId());
      },
    });
    let callSettings = new CometChat.CallSettingsBuilder().setSessionID(sessionID).enableDefaultLayout(true).setCallEventListener(callListener).build()
    CometChat.startCall(callSettings);

  }

  rejectCall(status){
    let sessionID = this.Call.getSessionId();
    CometChat.rejectCall(sessionID, status).then(
      rejectedCall => {
        console.log("Call rejected successfully:", rejectedCall);
        this.goBack();
      },
      error => {
        console.log("Call rejection failed with error", error);
      }
    );
  }

  acceptCall(){
    let sessionID = this.Call.getSessionId();
    CometChat.acceptCall(sessionID).then(
      acceptedCall => {
        console.log("Call accepted successfully:", acceptedCall);
        this.goBack();
        this.startCall();
      }
    );
  }

  goBack(){
    this.navController.pop();
  }

}
