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

  tab1Root = EmotionListPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
