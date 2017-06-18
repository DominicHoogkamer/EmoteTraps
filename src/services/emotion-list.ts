import { Emotion } from "../models/emotion";

export class EmotionListService {
  private emotions: Emotion[] = [];

  addItem(name: string, desc: string, traps: any) {
    this.emotions.push(new Emotion(name, desc, traps));
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