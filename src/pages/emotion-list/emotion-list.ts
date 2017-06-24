import { EmotionPage } from './../emotion/emotion';
import { AddEmotionPage } from './../add-emotion/add-emotion';
import { NavController } from 'ionic-angular';
import { EmotionListService } from './../../services/emotion-list';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Emotion } from './../../models/emotion';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'page-emotion-list',
  templateUrl: 'emotion-list.html',
})

export class EmotionListPage {

  listItems: Emotion[];

  constructor(private elService: EmotionListService, private navCtrl: NavController) {

  }

  ionViewWillEnter() {
    this.loadItems();
  }

  private loadItems() {
    this.listItems = this.elService.getItems();
  }

 onNewEmotion() {
  this.navCtrl.push(AddEmotionPage, {mode: 'New'})
 }

  onSeeEmote(index) {
    this.navCtrl.push(EmotionPage, {index: index})
  }

   onCheckItem(index: number) {
    this.elService.removeItem(index);
    this.loadItems();
  }


}
