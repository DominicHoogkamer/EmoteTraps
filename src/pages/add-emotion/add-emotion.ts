import { NavController } from 'ionic-angular';
import { EmotionListService } from './../../services/emotion-list';
import { NgForm } from '@angular/forms/src/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'page-add-emotion',
  templateUrl: 'add-emotion.html',
})
export class AddEmotionPage {

  private feelingsArray = [
    "feelingColor",
    "feelingEmote",
    "feelingMusic"
  ]
  private feelingItem;

  private firstQuestion: boolean = true;
  private secondQuestion: boolean = false;
  private thirdQuestion: boolean = false;

  private showTraps: boolean = false;

  private emotion: string;
  private description : string;
  private thinkingTraps = [];
  private thinkingArray = [];

  private trapsArray = {
    'personalization': {
      title: 'Personalization',
      desc: `Even though situations are
complex and determined by
many things, you accept too
much responsibility and blame
yourself for negative outcomes.`
    },
    'blaming': {
      title: 'Blaming',
      desc: `Newer members may wish to blame others for their problems. Coordinators may feel
compelled to show the member how he or she is actually at fault for the difficulties
encountered. Resist this urge. Blame is irrelevant and pointing the blame back at the
member may be quite de-motivating`
    },
  };




  constructor(private elService: EmotionListService, private navCtrl: NavController) {

    this.feelingItem = this.feelingsArray[Math.floor(Math.random()*this.feelingsArray.length)];
    console.log(this.feelingItem);
    
  }

  onAddItem() {
    this.elService.addItem(this.emotion, this.description, this.thinkingArray);
    this.navCtrl.popToRoot();
  }

  nextPage(data: string = '', pageId: number){

    if ( pageId == 1 ) {
      this.emotion = data;
      this.firstQuestion = false;
      this.secondQuestion = true;
    } else if ( pageId == 2) {
      this.secondQuestion = false;
      this.thirdQuestion = true;
    } else if (pageId == 3) {
      this.thirdQuestion = false;
      this.showTraps = true;



      for(let i = 0; i < this.thinkingTraps.length; i++) {
        this.thinkingArray.push(this.trapsArray[this.thinkingTraps[i]]);
      }

    }
  }



}
