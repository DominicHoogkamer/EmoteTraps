import { ProfilePage } from './../pages/profile/profile';
import { Camera } from '@ionic-native/camera';
import { DataProvider } from './../services/data';
// import { DataService } from './../services/data.service';
import { IntroPage } from './../pages/intro/intro';
import { EmotionPage } from './../pages/emotion/emotion';
import { AddEmotionPage } from './../pages/add-emotion/add-emotion';
import { EmotionListService } from './../services/emotion-list';
import { EmotionListPage } from './../pages/emotion-list/emotion-list';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from "@angular/http";


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EmotionListPage,
    AddEmotionPage,
    EmotionPage,
    ProfilePage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EmotionListPage,
    AddEmotionPage,
    EmotionPage,
    ProfilePage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmotionListService,
    DataProvider,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
