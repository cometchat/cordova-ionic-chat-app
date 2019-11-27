import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-blocked-users',
  templateUrl: './blocked-users.page.html',
  styleUrls: ['./blocked-users.page.scss'],
})

export class BlockedUsersPage implements OnInit {

  // @ViewChild('content') content: any;
  public blockedUserListArray: any = [];
  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router
  ) { }

ngOnInit() {
  this.getBLockedUsersList();
}

getBLockedUsersList() {
  const limit = 30;
  const blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder().setLimit(limit).build();
  blockedUsersRequest.fetchNext().then(
    userList => {
        this.blockedUserListArray = userList;
        console.log('Blocked user list received:', userList);
    },
    error => {
        console.log('Blocked user list fetching failed with error:', error);
    }
);
}

async presentActionSheet(user) {
  console.log(user);
  const actionSheet = await this.actionSheetController.create({
    header: 'Actions',
    buttons: [{
      text: 'Unblock User',
      handler: () => {
        console.log('Unblock clicked', user);
        const usersList = [user.uid];
          CometChat.unblockUsers(usersList).then(list => {
              console.log('users list unblocked', { list });
              this.getBLockedUsersList();
          }, error => {
              console.log('Blocking user fails with error', error);
          });
      }
    }, {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}

goBack() {
  this.router.navigate(['tabs/redirectToTabs']);
}

}

