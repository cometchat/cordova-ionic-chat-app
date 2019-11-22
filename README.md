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

  For more info you can go through our documentation [CometChat-Pro Documentation](https://prodocs.cometchat.com/docs/js-quick-start)
  
# Config-App
   

  <h2> v2.0+ </h2>
  <h4>
    Git clone and checkout v2 branch.
  </h4>
  <h4>Get your Application Keys</h4>

  <a href="https://app.cometchat.io/" target="_blank">Signup for CometChat</a> and then:

  1. Create a new app - select version as v2 and region as Europe or USA.

  2. Head over to the API Keys section and click on the Create API Key button

  3. Enter a name and select the scope as Auth Only

  4. Now note the API Key and App ID

  5. Replace  `appID`, &nbsp; `apiKey` and &nbsp; `appRegion` in **src/app/login/login.page.ts** with your APP ID, &nbsp; API KEY &nbsp;and&nbsp; APP Region respectively.<br/>

  <h2> v1.0+ </h2>

  <h4>
    Git clone and checkout v1 branch.
  </h4>

  <h4>Get your Application Keys</h4>

  <a href="https://app.cometchat.io/" target="_blank">Signup for CometChat</a> and then:

  1. Create a new app - select version as v1

  2. Head over to the API Keys section and click on the Create API Key button<br/>

  3. Enter a name and select the scope as Auth Only<br/>

  4. Now note the API Key and App ID<br/>

  5. Replace  `appID`, &nbsp; `apiKey` in **src/app/login/login.page.ts** with your APP ID, &nbsp;and&nbsp; API KEY respectively.<br/>

  # Running the sample app 

  Once you have changed the app key values you can run the project with the below command : 

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
