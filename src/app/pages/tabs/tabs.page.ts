import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
    public TAG: String = "Tabs";
    constructor(private router: Router){
        this.addCallListener();
    }

    addCallListener(){
        let listnerID = "TAB_PAGE_CALL_LISTENER";
        let that = this;
        CometChat.addCallListener(
            listnerID,
            new CometChat.CallListener({
                onIncomingCallReceived(call) {
                    console.log(that.TAG + ":: onIncomingCallReceived" + call);
                    if(CometChat.getActiveCall() === null){
                        if(call.getReceiverType() === 'user'){
                            const navigationExtras: NavigationExtras = {
                                state: {
                                    call: call,
                                    enableDefaultLayout: 1,
                                    isOutgoingCall: 0,
                                    entity: call.getCallInitiator(),
                                    entityType: 'user'
                                }
                            };
                            that.router.navigate(['calling-screen'], navigationExtras);
                        }else{
                            const navigationExtras: NavigationExtras = {
                                state: {
                                    call: call,
                                    enableDefaultLayout: 1,
                                    isOutgoingCall: 0,
                                    entity: call.getCallReceiver(),
                                    entityType: 'group'
                                }
                            };
                            that.router.navigate(['calling-screen'], navigationExtras);
                        }
                    }              
                },
            })
        );
    }

    ngOnInit() {
    }

    tappedOnTap2() {
        // console.log('tapped on tap 2');
    }

    tappedOnTap1() {
        // console.log('tapped on tap 1');
    }

}
