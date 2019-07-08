import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PopoverPage } from '../app/pages/popoverpage/popoverpage';

import {IonicStorageModule} from '@ionic/storage';

import { Chooser } from '@ionic-native/chooser/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ImageViewerComponent } from './component/image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PopoverPage,
    ImageViewerComponent
  ],
  entryComponents: [
    PopoverPage,
    ImageViewerComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Chooser,
    InAppBrowser,
    ImagePicker
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
