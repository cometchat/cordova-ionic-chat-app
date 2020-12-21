import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';
import {
    Plugins,
    PushNotification,
    PushNotificationToken,
    PushNotificationActionPerformed,
  } from '@capacitor/core';
  
const { PushNotifications, Storage } = Plugins;

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
    public userUID: string;
    // tslint:disable-next-line:no-inferrable-types
    public appID: string = "APP_ID";
    public apiKey: string = "AUTH_KEY";
    public appRegion: string = "REGION";

    public chatID: string = 'superhero1';

    public isCometLoggedIn: boolean = false;

    constructor(public navCtrl: NavController,
        private loadingController: LoadingController,
        private alertController: AlertController,
        private router: Router) {
        CometChat.init(this.appID, new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(this.appRegion).build()).then(
            initialized => {
                console.log("Initialized", initialized);
                if (initialized) {
                    CometChat.addConnectionListener(
                        "XMPPConnectionListener",
                        new CometChat.ConnectionListener({
                            onConnected: () => {
                                console.log("ConnectionListener => On Connected");
                            },
                            inConnecting: () => {
                                console.log("ConnectionListener => In connecting");
                            },
                            onDisconnected: () => {
                                console.log("ConnectionListener => On Disconnected");
                            },
                            featureThrottled: () => {
                                console.log("ConnectionListener => On Feature Throttled");
                            }
                        })
                    );
                    CometChat.addMessageListener(
                        "UNIQUE_LISTENER_ID_MESSAGE",
                        new CometChat.MessageListener({
                          onTextMessageReceived: textMessage => {
                            console.log("CC: Text message received successfully", textMessage);
                          },
                          onMediaMessageReceived: mediaMessage => {
                            console.log("CC: Media message received successfully", mediaMessage);
                          },
                          onCustomMessageReceived: customMessage => {
                            console.log("CC: Custom message received successfully", customMessage);
                          },
                          onMessagesDelivered: messageReceipt => {
                            console.log("CC: Message Delivered", messageReceipt);
                          },
                          onMessagesRead: messageReceipt => {
                            console.log("CC: Message Read", messageReceipt);
                          },
                          onTypingStarted: typingIndicator => {
                            console.log("CC: Typing Started", typingIndicator);
                          },
                          onTypingEnded: typingIndicator => {
                            console.log("CC: Typing Ended", typingIndicator);
                          }
                        })
                    );
                    CometChat.getLoggedinUser().then(user => {
                        if (user != null) {
                            console.log("getLoggedInUser", user);
                            this.router.navigate(['tabs']);
                        }else{
                            console.log("no logged in user");
                            CometChat.setSource('open-source-apps', 'ionic', 'ionic');
                        }
                    })
                }
            },
            error => {
                console.log('Initialization failed with error:', error);
                this.presentAlert(error.message);
            }
        );
    }

    ngOnInit() {
        PushNotifications.requestPermission().then( async result => {
            if (result.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
            } else {
                // Show some error
            }
        });

        PushNotifications.addListener('registration', async (token: PushNotificationToken) => {
            alert('Push registration success, token: ' + token.value);
            await Storage.set({
                key: 'fcmToken',
                value: token.value
            });
        });
    
        PushNotifications.addListener('registrationError', (error: any) => {
            alert('Error on registration: ' + JSON.stringify(error));
        });

        PushNotifications.addListener('pushNotificationReceived', (notification: PushNotification) => {
            alert('Push received: ' + JSON.stringify(notification));
        });
      
        PushNotifications.addListener('pushNotificationActionPerformed', (notification: PushNotificationActionPerformed) => {
            alert('Push action performed: ' + JSON.stringify(notification));
        });
    }

    getUserList(){
        var userBuilder = new CometChat.UsersRequestBuilder().setLimit(20).build();
        userBuilder.fetchNext().then(
            userList => {
                console.log("users", userList);
            },
            error => {
                console.log('User list fetching failed with error:', error);
            }
        );
    }

    async presentAlert(alertmessage: string) {
        const alert = await this.alertController.create({
            header: 'Error',
            message: alertmessage,
            buttons: ['OK']
        });

        await alert.present();
    }

    async onSubmit() {
        const loading = await this.loadingController.create({
            message: 'Please Wait',
            spinner: 'dots',
            translucent: true
        });
        loading.present();
        if(this.userUID.includes('_')){
            CometChat.login(this.userUID).then(
                user => {
                    console.log("user Login via authToken", user);
                    loading.dismiss();
                    this.router.navigate(['tabs']);
                },
                error => {
                    loading.dismiss();
                    this.presentAlert(error.message);
                }
            );
        }else{
            CometChat.login(this.userUID, this.apiKey).then(
                async user => {
                    console.log("user Login via apiKey", user);
                    loading.dismiss();
                    const { value } = await Storage.get({ key: 'fcmToken' });
                    this.setupPushNotification(value);
                    this.router.navigate(['tabs']);
                },
                error => {
                    loading.dismiss();
                    this.presentAlert(error.message);
                }
            );
        }
    }

    setupPushNotification(token){
        CometChat.registerTokenForPushNotification(token, {}).then(
            () => {
              console.log('registered token successfully');
            }, error => {
              console.log('error in register token')
            }
        );
    }
}