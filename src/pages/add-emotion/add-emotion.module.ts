import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEmotionPage } from './add-emotion';

@NgModule({
  declarations: [
    AddEmotionPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEmotionPage),
  ],
  exports: [
    AddEmotionPage
  ]
})
export class AddEmotionPageModule {}
