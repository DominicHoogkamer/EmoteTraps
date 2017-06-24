import { DataProvider } from './../../services/data';
import { EmotionListService } from './../../services/emotion-list';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-emotion',
  templateUrl: 'emotion.html',
})
export class EmotionPage {

  private listItems: any;
  private index: number;

  private showTraps: boolean = false;

  private emotion: string;
  private desc: string;
  private descEmotion: string;
  private faceImg: any = 'http://www.designshock.com/wp-content/uploads/2016/04/man-4-400.jpg';

  private traps: any;

  private anger: number = 0;
  private happy: number = 0;
  private neutral: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public elService: EmotionListService, public data: DataProvider) {
  }

  ionViewWillEnter() {
    this.loadItems();
    this.index = this.navParams.get('index');

    this.emotion = this.listItems[this.index].emotionType;
    this.desc = this.listItems[this.index].desc;
    this.traps = this.listItems[this.index].traps;
    this.descEmotion = this.listItems[this.index].descEmotion;

    if (this.listItems[this.index].faceAnalyse[0]) {
      this.anger = this.listItems[this.index].faceAnalyse[0].scores.anger;
      this.happy = this.listItems[this.index].faceAnalyse[0].scores.happiness;
      this.neutral = this.listItems[this.index].faceAnalyse[0].scores.neutral;

      Number(this.happy).toFixed(3);
      Number(this.neutral).toFixed(3);

    }

    if (this.listItems[this.index].faceImg) {
      this.faceImg = this.listItems[this.index].faceImg;
    }
    this.data.getDescEmotion(this.desc).subscribe(data => {
      this.descEmotion = data.emotion;
    })
  }

  seeTrapsSuggestions() {
    this.showTraps = true;
  }

  closeTraps() {
    this.showTraps = false;
  }

  private loadItems() {
    this.listItems = this.elService.getItems();
  }

}
