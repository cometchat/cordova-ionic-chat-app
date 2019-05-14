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

2. [Running the sample app](#Running-the-sample-app)

3. [Contributing](#Contributing)

# Installation 
### Note : This project is under progress.

  We have added the CometChat Pro SDK in our ionic project with the below command:
  
  ```
   $ npm install @cometchat-pro/chat@1.3.0 --save
   ```
  For more info you can go through our documentation [CometChat-Pro Documentation](https://prodocs.cometchat.com/docs/js-quick-start)
  
  Simply clone the project from the repository and make changes in the variables appID and apiKey present in **login.page.ts** file and change them to your apiKey and appID.
   
  You can obtain your  *APP_ID* and *API_KEY* from [CometChat-Pro Dashboard](https://app.cometchat.com/)
   
# Running the sample app

  Once you have changed the appID and apiKey variable values to your *APP_ID* and *API_KEY* you can run the project with the below command : 

  ```
   $ ionic serve -l
   ```
 
 The above command will run the App in your browser.
 
 To run the App in device simulator you can run the below command : 
 
 ```
   $ ionic cordova emulate ios --target=iPhone-6s
  ```
 
 Note : You can change the platform (ios/android) and target(device on which you want) in the above command.
 
 
 # Contributing 
   
   Feel free to make a suggestion by creating a pull request.
