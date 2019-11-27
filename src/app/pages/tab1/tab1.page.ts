import { Component, OnInit, ViewChild } from '@angular/core';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';
import { NavigationExtras, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popoverpage/popoverpage';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public userListArray: any = [];
  public userData: [];
  public refresh: any = 0;
  public unblockUserUID:  any = '';
  private limit: any = 30;
  private usersRequest: any;
  constructor(
  private router: Router,
  public actionSheetController: ActionSheetController,
  public popoverCtrl: PopoverController
  ) {}

  ngOnInit() {
    this.limit = 30;
    this.usersRequest = new CometChat.UsersRequestBuilder().setLimit(this.limit).build();
    this.getUserList();
    this.addUserEventListner();
  }

  ionViewWillEnter() {
    console.log('ion view will enter tab 1');
    this.ngOnInit();
  }

  getUserList() {
    this.usersRequest.fetchNext().then(
    userList => {
      if (userList.length > 0) {
        CometChat.getUnreadMessageCountForAllUsers().then(array => {
            const unread = Object.keys(array);
            if (unread.length > 0) {
                unread.map(uid => {
                    const index = userList.findIndex(user => user.uid === uid);
                    if (index !== -1) {
                        userList[index].unreadCount = array[uid];
                    }
                });
            }
            this.userListArray = userList;
            console.log('UserList Array :', this.userListArray);
        });
      }
    },
    error => {
      console.log('User list fetching failed with error:', error);
      }
    );
  }

  tappedOnItems(event, user) {
    console.log('here tappedOnItems ' + user);
    // tslint:disable-next-line:no-shadowed-variable
    this.userListArray.map(item => {
      if (item.uid === user.uid) {
        item.unreadCount = 0;
      }
    });
    this.userData = user;
    console.log('{{user.name}}');
    const navigationExtras: NavigationExtras = {
      state : {
        user : this.userData
      }
    };
    this.router.navigate(['chat-view'], navigationExtras);
  }

  loadNextUsers(event) {
    console.log(event);
    console.log('UserList Array 0 :', this.userListArray);
    this.usersRequest.fetchNext().then(
      userList => {
          console.log('User list received:', userList);
          if (userList !== '') {
            this.userListArray = this.userListArray.concat(userList);
            console.log('UserList Array 1 :', this.userListArray);
          }
      },
      error => {
        console.log('User list fetching failed with error:', error);
        }
      );
  }

  addUserEventListner() {
    const listenerID = 'UserEventsListnerInList';

    CometChat.addUserListener(
    listenerID,
    new CometChat.UserListener({
      onUserOnline: onlineUser => {
        console.log('On User Online:', { onlineUser });
        for (let i = 0; i < this.userListArray.length; i++) {
          if (this.userListArray[i].uid === onlineUser.uid) {
            this.userListArray[i].status = 'Online';
          }
        }

      },
      onUserOffline: offlineUser => {
      console.log('On User Offline:', { offlineUser });
        for (let i = 0; i < this.userListArray.length; i++) {
          if (this.userListArray[i].uid === offlineUser.uid) {
            this.userListArray[i].status = 'Offline';
          }
        }
      }
    })
    );
  }

  async presentActionSheet(event, user) {
    console.log('present action sheet', event, user);
    event.preventDefault();
    event.stopImmediatePropagation();
    if (user.blockedByMe) {
      const actionSheet = await this.actionSheetController.create({
        buttons: [{
          text: 'Unblock User',
          handler: () => {
            const usersList = [user.uid];
              CometChat.unblockUsers(usersList).then(list => {
                  console.log('users list blocked', { list });
                  this.refresh = 1;
                  this.getUserList();
              }, error => {
                  console.log('Blocking user fails with error', error);
              });
            console.log('Block clicked');
          }
        }]
      });
      await actionSheet.present();
    } else {
      const actionSheet = await this.actionSheetController.create({
        buttons: [{
          text: 'Block User',
          handler: () => {
            const usersList = [user.uid];
              CometChat.blockUsers(usersList).then(list => {
                  console.log('users list blocked', { list });
                  this.refresh = 1;
                  this.getUserList();
              }, error => {
                  console.log('Blocking user fails with error', error);
              });
            console.log('Block clicked');
          }
        }]
      });
      await actionSheet.present();
    }
  }

  async openMenu(myEvent) {

    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: myEvent
    });

    popover.present();

  }
}
