import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private userInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
    console.log(JSON.parse(this.userInfo = localStorage.getItem('userInfo')));
  }

  ionViewDidLoad() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

}
