import { Camera, CameraOptions } from '@ionic-native/camera';
import { DataProvider } from './../../services/data';
import { NavController } from 'ionic-angular';
import { EmotionListService } from './../../services/emotion-list';
import { Component } from '@angular/core';


@Component({
  selector: 'page-add-emotion',
  templateUrl: 'add-emotion.html',
})
export class AddEmotionPage {
    songItems: DataProvider;
    song: any = "happy";
    descEmotion: any;

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
  private faceIMG: any;
  private description: string;
  private songId: string;
  private faceAnalyse= [];
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
    'nothing': {
      title: 'You have experienced no negative traps',
      desc: `Good job on you! now go do somthing positive!`
    },
  };




  constructor(private elService: EmotionListService, private navCtrl: NavController, private data: DataProvider, private camera: Camera) {

    this.feelingItem = this.feelingsArray[Math.floor(Math.random() * this.feelingsArray.length)];
    

  }

  takeSelfie() {
    const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 256,
      targetHeight: 371,
      saveToPhotoAlbum: false,
      cameraDirection: 1
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.getEmotion(base64Image);
      this.faceIMG = base64Image;
    }, (err) => {
      // Handle error
    });
  }

  getEmotion(img) {
    this.data.getPersonEmotion(this.makeblob(img)).subscribe(data => {
      console.log(data);
      this.faceAnalyse = data;
    })
  }

  setFilteredSongs(){
      this.data.getMusic(this.song).subscribe(data => {
      this.songItems = data;
      console.log(this.songItems);
    })
  }

  playTrack(url) {
    let preview = new Audio(url);
    preview.play();
  }

  onAddItem() {
    this.elService.addItem(this.emotion, this.description, this.thinkingArray, this.faceAnalyse, this.faceIMG);
    this.navCtrl.popToRoot();
  }

  nextPage(data: string = '', pageId: number) {

    if (pageId == 1) {
      this.emotion = data;
      this.firstQuestion = false;
      this.secondQuestion = true;
    } else if (pageId == 2) {
      this.secondQuestion = false;
      this.thirdQuestion = true;
    } else if (pageId == 3) {
      this.thirdQuestion = false;
      this.showTraps = true;



      for (let i = 0; i < this.thinkingTraps.length; i++) {
        this.thinkingArray.push(this.trapsArray[this.thinkingTraps[i]]);
      }

    }
  }

  makeblob(dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
      var parts = dataURL.split(',');
      var contentType = parts[0].split(':')[1];
      var raw = decodeURIComponent(parts[1]);
      return new Blob([raw], { type: contentType });
    }
    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }



}
