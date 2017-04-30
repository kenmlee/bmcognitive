import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkTheme = false;

  production = environment.production;
  API_URL = environment.BASE_API_URL;

  systemLinks = [
    {label: 'system info', link: '/config'},
    {label: 'token', link: '/token'},
    {label: 'reference', link: '/reference'},
  ];

  functionLinks= [
    {label: 'speech-to-text', link: '/speech-to-text'},
    {label: 'text-to-speech', link: '/speech-to-text'}
  ];
}
