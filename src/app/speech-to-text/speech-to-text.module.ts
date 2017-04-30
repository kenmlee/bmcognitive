import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SpeechToTextRoutingModule } from './speech-to-text-routing.module';
import { BubbleListComponent } from './bubble-list/bubble-list.component';
import { AudioRecorderComponent } from './audio-recorder/audio-recorder.component';
import { VideoRecorderComponent } from './video-recorder/video-recorder.component';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';
import { STTOptionComponent } from './sttoption/sttoption.component';

import { TokenService } from '../token/token.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    SpeechToTextRoutingModule,
  ],
  declarations: [
    BubbleListComponent,
    AudioRecorderComponent,
    VideoRecorderComponent,
    SpeechToTextComponent,
    STTOptionComponent
  ],
  providers: [TokenService],
})
export class SpeechToTextModule { }
