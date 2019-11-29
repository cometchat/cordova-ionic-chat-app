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

1. [Config Local Enviroment](#Config-Local-Enviroment)

2. [Config App](#Config-App)

3. [Running the sample app](#Running-the-sample-app)

4. [Contributing](#Contributing)

# Config-Local-Enviroment 
1. Before proceeding, make sure the latest version of Node.js and npm are installed. 

2. Install the Ionic CLI

```bash

npm install -g ionic

```
For further and detailed steps, please visit the <a href="https://ionicframework.com/docs/installation/cli" target="_blank">ionic documentation</a>   

# Config-App
   
  <h2> v2.0+ </h2>
  <h4>
    Git clone and checkout v2 branch.
  </h4>
  <h4>Get your Application Keys</h4>

  <a href="https://app.cometchat.io/" target="_blank">Signup for CometChat</a> and then:

  1. Create a new app - select version as v2 and region as Europe or USA.
  <p style="clear:both; display:block;">
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/cometchat-pro-samples/ionic-chat-app/blob/master/readme screenshots/create-v2-app.gif"><img align="center" src="readme screenshots/create-v2-app.gif" style="max-width:100%;"></a>
  </p>

  2. Head over to the API Keys section and click on the Create API Key button

  3. Enter a name and select the scope as Auth Only

  4. Now note the API Key and App ID

  5. Replace  `appID`, &nbsp; `apiKey` and &nbsp; `appRegion` in **src/app/login/login.page.ts** with your APP ID, &nbsp; API KEY &nbsp;and&nbsp; APP Region respectively.<br/>

  <p style="clear:both; display:block;">
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/cometchat-pro-samples/ionic-chat-app/blob/master/readme screenshots/keys.png"><img align="center" src="readme screenshots/keys.png" style="max-width:100%;"></a>
  </p>

  <h2> v1.0+ </h2>

  <h4>
    Git clone and checkout v1 branch.
  </h4>

  <h4>Get your Application Keys</h4>

  <a href="https://app.cometchat.io/" target="_blank">Signup for CometChat</a> and then:

  1. Create a new app - select version as v1
  
  <p style="clear:both; display:block;">
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/cometchat-pro-samples/ionic-chat-app/blob/master/readme screenshots/create-v1-app.gif"><img align="center" src="readme screenshots/create-v1-app.gif" style="max-width:100%;"></a>
  </p>

  2. Head over to the API Keys section and click on the Create API Key button<br/>

  3. Enter a name and select the scope as Auth Only<br/>

  4. Now note the API Key and App ID<br/>

  5. Replace  `appID`, &nbsp; `apiKey` in **src/app/login/login.page.ts** with your APP ID, &nbsp;and&nbsp; API KEY respectively.<br/>

  <p style="clear:both; display:block;">
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/cometchat-pro-samples/ionic-chat-app/blob/master/readme screenshots/keys.png"><img align="center" src="readme screenshots/keys.png" style="max-width:100%;"></a>
  </p>

  # Running the sample app 

  Once you have changed the app key values you can install the dependencies and run the project: 
    
  ```
  npm install
  ```
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
