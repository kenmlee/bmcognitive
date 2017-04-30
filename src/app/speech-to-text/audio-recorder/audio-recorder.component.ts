import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
// import RecordRTC from '../../../../node_modules/recordrtc/RecordRTC';
// import * as RecordRTC from 'recordrtc';
/// <amd-dependency path="recordrtc/RecordRTC" />
declare var require: (moduleId: string) => any;
const RecordRTC = require('recordrtc/RecordRTC');

import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.scss']
})
export class AudioRecorderComponent implements OnInit {
  stream: MediaStream;
  recordRTC: any;
  recording = false;
  index = 0;

  @Output() newAudioSlice = new EventEmitter<Blob>();

  constructor(public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  recordButton(): void {
    this.recording = !this.recording;
    if (this.recording) {
      this.startRecording();
    } else {
      this.stopRecording();
    }
  }

  successCallback(stream: MediaStream) {
    const options = {
      type: 'audio',
      recorderType: RecordRTC.StereoAudioRecorder,
      desiredSampleRate: 16 * 1000
    };
    this.stream = stream;
    this.index++;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
  }

  errorCallback(err: Error) {
    this.snackBar.open(err.message);
  }

  processAudio(audioURL: string) {
    const recordRTC = this.recordRTC;

    const recordedBlob = recordRTC.getBlob();
    this.newAudioSlice.emit(recordedBlob);
    // this._STTwsService.send(recordedBlob);
    // recordRTC.getDataURL((dataURL: string) => this.dataURL = dataURL);
    // // this.dataURL = recordRTC.toURL();
    // this._STTwsService.stop();
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
    recordRTC.stopRecording(this.processAudio.bind(this));
    const stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
  }

  download() {
    this.recordRTC.save('recordrtc');
  }
}
