import { IntroPage } from './../intro/intro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {

private username: string;
private password: string;

private loginistrue: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  checkLogin() {
    if(this.username == 'admin' && this.password == 'admin') {
      this.loginistrue = true;
      this.navCtrl.setRoot(IntroPage);
    }
  }

}
