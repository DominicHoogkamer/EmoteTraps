import { IntroPage } from './../intro/intro';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
    @ViewChild(Slides) slides: Slides;

private username: string;
private password: string;

private loginistrue: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);

    let tabBar = document.querySelector('.tabbar');
    tabBar.classList.add('hide-tabs');
  }

  checkLogin() {
    if(this.username == 'admin' && this.password == 'admin') {
      this.loginistrue = true;
      this.navCtrl.setRoot(IntroPage);
          let tabBar = document.querySelector('.tabbar');
    tabBar.classList.remove('hide-tabs');
    }
  }

}
