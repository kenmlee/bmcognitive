import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { EnvConfigService } from './env-config.service';
import { BluemixConnect } from './bluemix-connect';
import { TokenService } from '../token/token.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-env-config',
  templateUrl: './env-config.component.html',
  styleUrls: ['./env-config.component.css'],
  providers: [EnvConfigService, TokenService]
})
export class EnvConfigComponent implements OnInit {
  name: string;
  isLocal: boolean;
  connects: BluemixConnect[] = [];
  urls: string[];

  currentConnect: BluemixConnect;
  token: string;

  constructor(private _envConfig: EnvConfigService, private _tokenService: TokenService) { }

  ngOnInit() {
    this._envConfig.getCFEnv()
      .subscribe(res => {
        this.name = res.name;
        this.isLocal = res.isLocal;
        this.urls = res.urls;
        this.getConnections(res.services);
        // this.connects.push(new BluemixConnect());
      });
  }

  getToken(connect: BluemixConnect) {
    this.currentConnect = connect;
    this._tokenService.getToken(connect.username, connect.password, connect.url)
      .subscribe((t: string) => this.token = t);
  }

  getConnections(cfService: object) {
    for (const service of environment.services) {
      const cfs = cfService[service.replace(/-/g, '_')];
      if (cfs) {
        console.log(cfs);
        for (const conn of cfs) {
          const connect = new BluemixConnect();
          connect.service = service;
          connect.name = conn.name;
          connect.label = conn.label;
          connect.plan = conn.plan;
          connect.url = conn.credentials.url;
          connect.username = conn.credentials.username;
          connect.password = conn.credentials.password;
          this.connects.push(connect);
        }
      }
    };
  }

}
