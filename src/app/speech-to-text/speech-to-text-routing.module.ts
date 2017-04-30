import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

const routes: Routes = [
  {
    path: 'speech-to-text',
    component: SpeechToTextComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeechToTextRoutingModule { }
