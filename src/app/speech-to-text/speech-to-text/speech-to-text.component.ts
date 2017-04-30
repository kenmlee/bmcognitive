import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { Subscription, Observable } from 'rxjs/Rx';

import { STTWebSocketService, ResultType } from '../../shared/WastonSTTWebSocket.service';
import { TokenService } from '../../token/token.service';
import { BubbleListComponent } from '../bubble-list/bubble-list.component';
import { Bubble } from '../bubble-list/bubble';
import { STTOptionComponent } from '../sttoption/sttoption.component';

const ERROR_DISMISS_TIMEOUT = 3000;
const EMPTY_TRANSCRIPT = '......';

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss'],
  providers: [TokenService, STTWebSocketService]
})
export class SpeechToTextComponent implements AfterViewInit {
  bubbles: Array<Bubble> = [];
  showOption = false;
  token = '';
  backServiceName = 'speech-to-text';
  audioFormat = 'audio/wav';
  dataURL: string;

  $message: Observable<Object>;
  messageSubscription: Subscription;

  @ViewChild(STTOptionComponent) sttOption: STTOptionComponent;

  constructor(
    private _tokenService: TokenService,
    private _sttwsService: STTWebSocketService,
    public snackBar: MdSnackBar
  ) {
    // for test
    const bubble = new Bubble(EMPTY_TRANSCRIPT);
    this.bubbles.unshift(bubble);
  }

  ngAfterViewInit() {
    this._tokenService.getToken(this.backServiceName).subscribe(
      (token: string) => {
        this.token = token;
        this.connectToBackService();
      },
      this.errorHandler  // TODO: reconnect after a timeout
    );
  }

  connectToBackService() {
    this.$message = this._sttwsService.connect(
      this.token,
      this.sttOption.selectedModel,
      this.sttOption.customizedModelGUID,
      this.sttOption.isLoggingData
    );
    this.messageSubscription = this.$message.subscribe(
      this.resultHandler.bind(this),
      this.errorHandler.bind(this)
    );
    this._sttwsService.start(this.audioFormat);
    // add KeepAlive to message, so subscribe message will also subscribe KeepAlive
    this.messageSubscription.add(this._sttwsService.enableKeepAlive());
  }

  reconnectToBackService($event: boolean) {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    this.connectToBackService();
  }

  resultHandler(res: any) {
    // console.log(res);
    switch (res.type) {
      case ResultType.result:
        const transcript = res.results[0] ? res.results[0].transcript : '';
        this.bubbles[0].content = transcript;  // the current bubble is always the first (index 0) one
        break;
      case ResultType.error:
        this.snackBar.open(res.desp, null, { duration: ERROR_DISMISS_TIMEOUT });
        break;
      default:
        break;
    }
  }

  errorHandler(err: Error | string) {
    let message = '';
    typeof err === 'string' ? message = err : message = err.message;
    this.snackBar.open(message, null, { duration: ERROR_DISMISS_TIMEOUT });
  }

  newAudioSlice(audioBlob: Blob) {
    console.log('get blob');
    this.dataURL = URL.createObjectURL(audioBlob);
    const bubble = new Bubble(EMPTY_TRANSCRIPT);
    bubble.dataURL = this.dataURL;
    this.bubbles.unshift(bubble);
    console.log('created a new bubble');
    this._sttwsService.send(audioBlob);
    this._sttwsService.stop(); // soon I will change that to handle chunks
    console.log('sent to back service');
  }

  clear() {
    this.bubbles = [];
  }

}
