import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class EnvConfigService {

  constructor(private _http: Http) { }

  getCFEnv() {
    return this._http.get(environment.CFENV_URL).map(r => r.json());
  }
}
