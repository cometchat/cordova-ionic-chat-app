import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CometChat, User } from '@cometchat-pro/chat';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public userListArray : any = [];
  public userData : User;
  constructor(public navCtrl : NavController, private router : Router) { }

  limit = 30;
  usersRequest = new CometChat.UsersRequestBuilder().setLimit(this.limit).build();

  ngOnInit() {
    this.getUserList();
  }

  getUserList(){

    console.log("here the call has reached");

    this.usersRequest.fetchNext().then(
    userList => {
      /* userList will be the list of User class. */
        this.userListArray = userList;
        console.log("UserList Array :",this.userListArray);
      /* retrived list can be used to display contact list. */
    },
    error => {
      console.log("User list fetching failed with error:", error);
      }
    );
  }

  tappedOnItems(event, user){
    console.log("here tappedOnItems "+ user);
    this.userData = user;
    console.log("{{user.name}}");
    let navigationExtras : NavigationExtras = {
      state : {
        user : this.userData
      }
    }
    this.router.navigate(['chat-view'],navigationExtras);
  }

  loadNextUsers(event) {
    console.log("here the next users are loaded");
    this.usersRequest.fetchNext().then(
      userList => {
        /* userList will be the list of User class. */
          console.log("User list received:", userList);
          if (userList != ""){
            this.userListArray = this.userListArray.concat(userList);
          }
          console.log("UserList Array :",this.userListArray);
          event.target.complete();
        /* retrived list can be used to display contact list. */
      },
      error => {
        console.log("User list fetching failed with error:", error);
        }
      );
  }

}
