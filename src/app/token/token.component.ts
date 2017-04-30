import { Component, AfterViewInit } from '@angular/core';

import * as _ from 'lodash';

import { TokenService } from './token.service';
import { environment } from '../../environments/environment';
import { BluemixService } from '../../environments/settings';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css'],
  providers: [TokenService]
})
export class TokenComponent implements AfterViewInit {

  username: string;
  password: string;
  _url: string;
  token: string;
  services = environment.services;
  selectedService = 'speech-to-text';
  submitted = false;

  constructor(private _tokenService: TokenService) { }

  ngAfterViewInit() {
  }

  get url(){
    const bs = _.find(this.services, { name: this.selectedService });
    this._url = bs.authLink;
    return this._url;
  }

  // oldGetToken() {
  //   this.submitted = true;
  //   this.token = `Retrieving......`;
  //   this._tokenService.getToken(this.username, this.password, this.url)
  //     .subscribe((res: string) => this.token = res,
  //     err => console.log(err),
  //     () => this.submitted = false
  //     );
  // }

  getToken() {
    this.submitted = true;
    this.token = `Retrieving......`;
    this._tokenService.getToken(this.selectedService)
      .subscribe((res: string) => this.token = res,
      err => console.log(err),
      () => this.submitted = false
      );
  }

}
