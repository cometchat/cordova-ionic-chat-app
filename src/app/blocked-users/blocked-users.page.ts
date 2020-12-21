import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';
import { Router } from '@angular/router';


@Component({
    selector: 'app-blocked-users',
    templateUrl: './blocked-users.page.html',
    styleUrls: ['./blocked-users.page.scss'],
})

export class BlockedUsersPage implements OnInit {

    public blockedUserListArray: any = [];
    constructor(
        public actionSheetController: ActionSheetController,
        private router: Router
    ) { }

    ngOnInit() {
        this.getBLockedUsersList();
    }

    getBLockedUsersList() {
        var limit = 3;
        var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder().setLimit(limit).build();
        blockedUsersRequest.fetchNext().then(userList => {
            this.blockedUserListArray.push(userList);
            blockedUsersRequest.fetchNext().then(userList1 => {
                this.blockedUserListArray.push(userList1); 
                blockedUsersRequest.fetchNext().then(userList2 => {
                    this.blockedUserListArray.push(userList2);   
                    blockedUsersRequest.fetchNext().then(userList3 => {
                        this.blockedUserListArray.push(userList3);
                        blockedUsersRequest.fetchNext().then(userList4 => {
                            this.blockedUserListArray.push(userList4);
                        }); 
                    }); 
                }); 

            }); 
        });
    }

    async presentActionSheet(user) {
        const actionSheet = await this.actionSheetController.create({
            header: 'Actions',
            buttons: [{
                text: 'Unblock User',
                handler: () => {
                    const usersList = [user.uid];
                    CometChat.unblockUsers(usersList).then(
                        list => {
                            this.getBLockedUsersList();
                        }, error => {
                            console.log('Blocking user fails with error', error);
                        }
                    );
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

