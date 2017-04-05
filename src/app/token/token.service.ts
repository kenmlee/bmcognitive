import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment';

@Injectable()
export class TokenService {

  constructor(private _http: Http) { }

  getToken(username: string, password: string, url: string) {
    const basicAuth = btoa(`${username}:${password}`);
    const tokenUrl = `${environment.BASE_API_URL}token?basicauth=${basicAuth}&type=stream&url=${url}`;

    return this._http.get(tokenUrl)
      .map((res: Response) => {
        return res.text();
      }).catch((err: Response | any) => {
        console.log(err);
        return err;
      });
  }
}
