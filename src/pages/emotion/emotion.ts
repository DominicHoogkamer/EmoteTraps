import { EmotionListService } from './../../services/emotion-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-emotion',
  templateUrl: 'emotion.html',
})
export class EmotionPage {

  private listItems: any;
  private index: number;

  private name: string;
  private desc: string;

  private traps: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public elService: EmotionListService) {
  }

  ionViewWillEnter() {
    this.loadItems();
    this.index = this.navParams.get('index');

    this.name = this.listItems[this.index].name;
    this.desc = this.listItems[this.index].desc;
    this.traps = this.listItems[this.index].traps;

    console.log(this.traps[0].title)
  }

  private loadItems() {
    this.listItems = this.elService.getItems();
  }

}
