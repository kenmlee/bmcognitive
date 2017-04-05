import { Component, OnInit, ViewChild } from '@angular/core';
// import RecordRTC from '../../../../node_modules/recordrtc/RecordRTC';
// import * as RecordRTC from 'recordrtc';
/// <amd-dependency path="recordrtc/RecordRTC" />
declare var require: (moduleId: string) => any;
const RecordRTC = require('recordrtc/RecordRTC');

import { STTWebSocketService } from '../../shared/WastonSTTWebSocket.service';
import { WebSocketService } from '../../shared/websocket.service';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.css'],
  providers: [STTWebSocketService, WebSocketService]
})
export class AudioRecorderComponent implements OnInit {
  stream: MediaStream;
  recordRTC: any;
  recording = false;
  buttonTitle = 'start';
  transcript = '';

  @ViewChild('audio') audio: any;

  constructor(private _STTwsService: STTWebSocketService) { }

  ngOnInit() {
    const audio: HTMLAudioElement = this.audio.nativeElement;
    audio.muted = false;
    audio.controls = true;
    audio.autoplay = false;

    this._STTwsService.messages.subscribe(res => {
      this.transcript = res['results'];
    })
  }

  recordButton(): void {
    this.recording = !this.recording;
    if (this.recording) {
      this.buttonTitle = 'stop';
      this.startRecording();
    } else {
      this.stopRecording();
      this.buttonTitle = 'start';
    }
  }


  toggleControls() {
    const audio: HTMLVideoElement = this.audio.nativeElement;
    audio.muted = !audio.muted;
    audio.controls = !audio.controls;
    audio.autoplay = !audio.autoplay;
  }

  successCallback(stream: MediaStream) {
    const options = {
      type: 'audio',
      sampleRate: 48000,
      numberOfAudioChannels: 1
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    // this.toggleControls();
    this._STTwsService.messages.next(JSON.stringify({
      'action': 'start',
      'content-type': 'audio/l16; rate=48000; channels:1',
      'interim_results': false
    }));
  }

  errorCallback(err: Error) {
    console.error(err);
  }

  processVideo(audioURL: string) {
    const audio: HTMLVideoElement = this.audio.nativeElement;
    const recordRTC = this.recordRTC;
    audio.src = audioURL;
    // this.toggleControls();

    const recordedBlob = recordRTC.getBlob();
    this._STTwsService.messages.next(recordedBlob);
    recordRTC.getDataURL((dataURL: string) => audio.src = dataURL);
  }

  startRecording() {
    const mediaConstraints = {
      audio: true,
      video: false
    };
    navigator.mediaDevices.getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  stopRecording() {
    const recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    const stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
  }

  download() {
    this.recordRTC.save('recordrtc');
  }
}
