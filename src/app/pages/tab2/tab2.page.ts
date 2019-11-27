import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';
import { NavigationExtras, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popoverpage/popoverpage';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  public groupListArray: any = [];
  public groupData: [];
  public refresh: any = 0;
  private limit: any = 30;
  private groupsRequest: any;

  constructor(
  public navCtrl: NavController,
  private router: Router,
  public popoverCtrl: PopoverController) {}

  ngOnInit() {
    this.limit = 30;
    this.groupsRequest = new CometChat.GroupsRequestBuilder().setLimit(this.limit).build();
    this.getGroupList();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  getGroupList() {
    this.groupsRequest.fetchNext().then(
      groupList => {
        CometChat.getUnreadMessageCountForAllGroups().then(array => {
          const unread = Object.keys(array);
          if (unread.length > 0) {
              unread.map(guid => {
                  const index = groupList.findIndex(user => user.guid === guid);
                  if (index !== -1) {
                    groupList[index].unreadCount = array[guid];
                  }
              });
          }
          this.groupListArray = groupList;
          console.log('UserList Array :', this.groupListArray);
      });
    },
    error => {
      console.log('Groups list fetching failed with error', error);
    }
    );
  }

  loadNextGroups(event) {
    console.log('here the next users are loaded');
    this.groupsRequest.fetchNext().then(
      groupList => {
        /* groupList will be the list of Group class */
          console.log('Groups list fetched successfully', groupList);
          if (groupList !== '') {
            this.groupListArray = this.groupListArray.concat(groupList);
          }
        /* you can display the list of groups available using groupList */
      },
      error => {
        console.log('Next Groups list fetching failed with error', error);
      }
      );
  }

  tappedOnItems(event, group) {
    console.log('here tappedOnItems ', group);
    this.groupData = group;
    console.log('{{group.name}}');
    this.groupListArray.map(item => {
      if (item.guid === group.guid) {
        item.unreadCount = 0;
      }
    });

    if (group.hasJoined === false) {
      CometChat.joinGroup(group.guid, group.type , '')
      .then(group => {
         console.log('Group joined successfully:', group);
         const navigationExtras: NavigationExtras = {
          state : {
            group : this.groupData
          }
        };
        this.router.navigate(['groupchat-view'], navigationExtras);
        },
        error => {
         console.log('Group joining failed with exception:', error);
        }
       );
    } else {
      const navigationExtras: NavigationExtras = {
        state : {
          group : this.groupData
        }
      };
      this.router.navigate(['groupchat-view'],navigationExtras);
    }

  }

  async openMenu(myEvent) {
    console.log('menu:', myEvent);
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: myEvent
    });
    return await popover.present();
  }
}
