import { Emotion } from "../models/emotion";

export class EmotionListService {
  private emotions: Emotion[] = [];

  addItem(emotionType: string, desc: string, traps: any, faceAnalyse: any, faceImg: any, time: any) {
    this.emotions.push(new Emotion(emotionType, desc, traps, faceAnalyse, faceImg, time));
    console.log(this.emotions);
  }

  addItems(items: Emotion[]) {
    this.emotions.push(...items);
  }

  getItems() {
    return this.emotions.slice();
  }

  removeItem(index: number) {
    this.emotions.splice(index, 1);
  }
}