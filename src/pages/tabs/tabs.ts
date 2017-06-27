import { LoginPage } from './../login/login';
import { ProfilePage } from './../profile/profile';
import { IntroPage } from './../intro/intro';
import { EmotionListPage } from './../emotion-list/emotion-list';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
