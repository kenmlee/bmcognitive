import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BubbleListComponent} from './bubble-list/bubble-list.component';

const routes: Routes = [
  {
    path: 'speech-to-text',
    component: BubbleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeechToTextRoutingModule { }
