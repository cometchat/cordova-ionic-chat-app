import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CometChat, User, Group } from '@cometchat-pro/chat';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  public groupListArray : any = [];
  public groupData : Group;

  limit = 30;

  groupsRequest = new CometChat.GroupsRequestBuilder().setLimit(this.limit).build();

  constructor(public navCtrl : NavController, private router : Router) { }

  ngOnInit() {
    this.getGroupList();
  }

  getGroupList(){

    console.log("here the call has reached");
    this.groupsRequest.fetchNext().then(
    groupList => {
      /* groupList will be the list of Group class */
        console.log("Groups list fetched successfully", groupList);
        this.groupListArray = groupList;
      /* you can display the list of groups available using groupList */
    },
    error => {
      console.log("Groups list fetching failed with error", error);
    }
    );
  }

  loadNextGroups(event) {
    console.log("here the next users are loaded");
    this.groupsRequest.fetchNext().then(
      groupList => {
        /* groupList will be the list of Group class */
          console.log("Groups list fetched successfully", groupList);
          
          if (groupList != ""){
            this.groupListArray = this.groupListArray.concat(groupList); 
          }
          event.target.complete();
        /* you can display the list of groups available using groupList */
      },
      error => {
        console.log("Next Groups list fetching failed with error", error);
      }
      );
  }

  tappedOnItems(event, group){
    console.log("here tappedOnItems "+ group);
    this.groupData = group;
    console.log("{{group.name}}");

    var groupType = CometChat.GROUP_TYPE.PUBLIC;

    if (group.hasJoined == false){
      CometChat.joinGroup(group.guid, group.type , "").then(
        group => {
         console.log("Group joined successfully:", group);
         let navigationExtras : NavigationExtras = {
          state : {
            group : this.groupData
          }
        }
        this.router.navigate(['groupchat-view'],navigationExtras);
        },
        error => {
         console.log("Group joining failed with exception:", error);
        }
       );
    }else {
      let navigationExtras : NavigationExtras = {
        state : {
          group : this.groupData
        }
      }
      this.router.navigate(['groupchat-view'],navigationExtras);
    }
    
  }

}
