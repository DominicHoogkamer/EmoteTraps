import { EmotionListPage } from './../emotion-list/emotion-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  private name: string;
  private description : string;
  private improve: string;
  private reminder: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  finishIntro() {
    let userObject = {
      'name': this.name,
      'desc': this.description,
      'improve': this.improve,
      'reminder': this.reminder
    }

    localStorage.setItem('userInfo', JSON.stringify(userObject));

    this.navCtrl.setRoot(EmotionListPage);
  }


}
