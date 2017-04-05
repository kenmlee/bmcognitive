import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeechToTextRoutingModule } from './speech-to-text-routing.module';
import { BubbleListComponent } from './bubble-list/bubble-list.component';
import { AudioRecorderComponent } from './audio-recorder/audio-recorder.component';
import { VideoRecorderComponent } from './video-recorder/video-recorder.component';

@NgModule({
  imports: [
    CommonModule,
    SpeechToTextRoutingModule
  ],
  declarations: [
    BubbleListComponent,
    AudioRecorderComponent,
    VideoRecorderComponent
  ]
})
export class SpeechToTextModule { }
