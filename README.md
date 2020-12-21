# cometchat-pro-Ionic-sample-app
<div style="width:100%">
	<div style="width:50%; display:inline-block">
		<p align="center">
		<img align="center" width="180" height="180" alt="" src="https://github.com/cometchat-pro/ios-swift-chat-app/blob/master/Screenshots/CometChat%20Logo.png">	
		</p>	
	</div>	
</div>
</br>
</br>
</div>

CometChat ionic Demo app (built using **CometChat Pro**) is a fully functional messaging app capable of **one-on-one** (private) and **group** messaging. The app enables users to send **text** messages.

![Platform](https://img.shields.io/badge/Platform-ionic-orange.svg)

## Table of Contents

1. [Installation](#Installation)

2. [Config App](#Config-App)

3. [Running the sample app](#Running-the-sample-app)

4. [Contributing](#Contributing)

# Installation 
### Note : This project is under progress.

  For more info you can go through our documentation [CometChat-Pro Documentation](https://prodocs.cometchat.com/docs/cordova-ionic-quick-start)
  
# Config-App

  <a href="https://app.cometchat.io/" target="_blank">Signup for CometChat</a> and then:

  1. Create a new app - select version as v2 and region as Europe or USA.

  2. Head over to the API Keys section and click on the Create API Key button

  3. Enter a name and select the scope as Auth Only

  4. Now note the API Key and App ID

  5. Replace  `appID`, &nbsp; `apiKey` and &nbsp; `appRegion` in **src/app/login/login.page.ts** with your APP ID,&nbsp;AUTH KEY&nbsp;and&nbsp;APP Region respectively.<br/>

  # Running the sample app 

  Once you have changed the app key values you can install the dependencies and run the project: 
    
  ```
    npm install
  ```

  You must build your Ionic project at least once before adding any native platforms.
  
  ```
    ionic build
  ```

  This creates the www folder that Capacitor has been automatically configured to use as the webDir in capacitor.config.json.
  
  ```
    npx cap add ios
    npx cap add android
  ```
  
  Both android and ios folders at the root of the project are created. These are entirely separate native project artifacts that should be considered part of your Ionic app (i.e., check them into source control, edit them in their own IDEs, etc.).
  
  ```
    npx cap open ios
    npx cap open android
  ```
  The native iOS and Android projects are opened in their standard IDEs (Xcode and Android Studio, respectively). Use the IDEs to run and deploy your app.

  Every time you perform a build (e.g. ionic build) that changes your web directory (default: www), you’ll need to copy those changes down to your native projects:

  ```
    npx cap copy
  ```

  # Push Notification

  To get Push Notification working you need to replace the google-services.json & GoogleService-Info.plist file present in android/app & ios/app respectively. Also, do not forget to add your Firebase Server Key in CometChat Dashboard. Please check the Push Notification Extension Documentation [here](https://prodocs.cometchat.com/docs/ionic-cordova-extensions-enhanced-push-notification). You can check the documentation of capacitor plugin for [Push Notification](https://capacitorjs.com/docs/guides/push-notifications-firebase) setup.
 # Contributing 
   
  Feel free to make a suggestion by creating a pull request.
