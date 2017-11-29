import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { NewsPage } from '../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';
import { ChargerPage } from '../pages/charger/charger';
import { BinPage } from '../pages/bin/bin';
import { InfoPage } from '../pages/info/info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServerService } from '../pages/server.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook } from '@ionic-native/facebook';


@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    TabsPage,
    AccountPage,
    ChargerPage,
    BinPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    TabsPage,
    AccountPage,
    ChargerPage,
    BinPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerService,
    InAppBrowser,
    Geolocation,
    GoogleMaps,
    LaunchNavigator,
    NativeStorage,
    Facebook
  ]
})
export class AppModule {}
