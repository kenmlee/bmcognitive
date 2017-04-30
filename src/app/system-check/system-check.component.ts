import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-check',
  templateUrl: './system-check.component.html',
  styleUrls: ['./system-check.component.css']
})
export class SystemCheckComponent implements OnInit {
  isMicrophoneEnabled: boolean;

  constructor() {
  }

  ngOnInit() {
    this.checkMicrophoneEnabled();
  }

  get hasGetUserMedia() {
    return !!(navigator.mediaDevices.getUserMedia);
  }

  checkMicrophoneEnabled() {
    if (!this.hasGetUserMedia) {
      this.isMicrophoneEnabled = false;
    } else {
      navigator.mediaDevices.getUserMedia(
        { audio: true })
        .then(stream => this.isMicrophoneEnabled = true)
        .catch(err => this.isMicrophoneEnabled = false);
    }
  }
}
