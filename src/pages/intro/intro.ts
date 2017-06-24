import { LocalNotifications } from '@ionic-native/local-notifications';
import { EmotionListPage } from './../emotion-list/emotion-list';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;

  private name: string;
  private description: string;
  private improve: string;
  private reminder: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private localNotifications: LocalNotifications) {
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);

    let tabBar = document.querySelector('.tabbar');
    tabBar.classList.add('hide-tabs');
  }

  nextPage() {
    let index = this.slides.getActiveIndex();
    this.slides.lockSwipes(false);
    this.slides.slideNext()
    this.slides.lockSwipes(true);
  }

  finishIntro() {
    let userObject = {
      'name': this.name,
      'desc': this.description,
      'improve': this.improve,
      'reminder': this.reminder
    }

    localStorage.setItem('userInfo', JSON.stringify(userObject));
    let tabBar = document.querySelector('.tabbar');
    tabBar.classList.remove('hide-tabs');

    this.navCtrl.setRoot(EmotionListPage);
    this.setNotifications(this.reminder);
  }

    setNotifications(time) {
      this.localNotifications.schedule({
        text: 'It is that time of the day to fill in an emotion :)',
        at: new Date(new Date().getTime() + 4500),
        led: 'FF0000',
        sound:  'file://sound.mp3'
      });
    }
}
