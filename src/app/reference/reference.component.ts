import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {

  refers = [
    {label: 'Bluemix', link: 'https://console.ng.bluemix.net/docs/'},
    {label: 'Speech-To-Text API', link: 'https://www.ibm.com/watson/developercloud/doc/speech-to-text/index.html'},
    {label: 'Material Design', link: 'https://material.io/'},
    {label: 'Material Design Icon Library', link: 'https://material.io/icons/'},
    {label: 'Materialize', link: 'http://materializecss.com/'},
    {label: 'Angular', link: 'https://angular.io/docs/ts/latest/'},
    {label: 'Angular Material', link: 'https://material.angular.io/'},
    {label: 'Angular Flex Layout', link: 'https://github.com/angular/flex-layout'},
    {label: 'Typescript', link: 'http://www.typescriptlang.org/docs/tutorial.html'},
    {label: 'RecordRTC', link: 'https://www.webrtc-experiment.com/RecordRTC/'},
    {label: 'Skeleton', link: 'http://www.getskeleton.com"'},
    {label: 'Material Icons Font', link: 'http://google.github.io/material-design-icons/#icon-font-for-the-web'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
