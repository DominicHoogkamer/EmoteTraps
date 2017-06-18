import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmotionListPage } from './emotion-list';

@NgModule({
  declarations: [
    EmotionListPage,
  ],
  imports: [
    IonicPageModule.forChild(EmotionListPage),
  ],
  exports: [
    EmotionListPage
  ]
})
export class EmotionListPageModule {}
