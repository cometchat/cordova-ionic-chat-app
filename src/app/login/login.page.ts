import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public userUID: string;
  // tslint:disable-next-line:no-inferrable-types
  public appID: string = 'XXXXXXXXXXXXXX';
  // tslint:disable-next-line:no-inferrable-types
  public apiKey: string = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX';

  public appRegion: string = 'XX';

  constructor(public navCtrl: NavController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router) {  }

  ngOnInit() {}

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
    CometChat.init(this.appID, new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(this.appRegion)
    .build()).then(

      () => {
        console.log('Initialization completed successfully');

        CometChat.login(this.userUID, this.apiKey).then(
          user => {
            console.log('Login Successful:', { user });
            loading.dismiss();
            this.router.navigate(['tabs']);
            // User loged in successfully.
          },
          error => {
            loading.dismiss();
            this.presentAlert(error.message);
            // User login failed, check error and take appropriate action.
          }
        );
        // You can now call login function.
      },
      error => {
        console.log('Initialization failed with error:', error);
        this.presentAlert(error.message);
        // Check the reason for error and take apppropriate action.
      }

    );
  }

}
