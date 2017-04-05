import { Component, OnInit, ViewChild } from '@angular/core';
/// <amd-dependency path="recordrtc/RecordRTC" />
declare var require: (moduleId: string) => any;
const RecordRTC = require('recordrtc/RecordRTC');

@Component({
  selector: 'app-video-recorder',
  templateUrl: './video-recorder.component.html',
  styleUrls: ['./video-recorder.component.css']
})
export class VideoRecorderComponent implements OnInit {
  private stream: MediaStream;
  private recordRTC: any;

  @ViewChild('video') video: any;

  constructor() { }

  ngOnInit() {
    const video: HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  toggleControls() {
    const video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {
    const options = {
      mimeType: 'video/webm',
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    const video: HTMLVideoElement = this.video.nativeElement;
    video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback() {
    console.error('some error happened');
  }

  processVideo(audioVideoWebMURL: string) {
    const video: HTMLVideoElement = this.video.nativeElement;
    const recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    this.toggleControls();
    const recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(
      function (dataURL: any) { });
  }

  startRecording() {
    const mediaConstraints = {
      video: {
        mandatory: {
          minWidth: 1280,
          minHeight: 720
        }
      },
      audio: true
    };
    navigator.mediaDevices.getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  stopRecording() {
    const recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    const stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
  }

  download() {
    this.recordRTC.save('video.webm');
  }
}
