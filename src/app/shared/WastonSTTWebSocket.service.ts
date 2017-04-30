import { Injectable } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// For develop only
const WSURL = `wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize`;
// const MODEL = `zh-CN_BroadbandModel`;
// const MODEL = `zh-CN_NarrowbandModel`;
const MODEL = `en-US_BroadbandModel`;

export enum ResultType {
  state = 1,
  result,
  error
}

export interface Action {
  'action': string;
  'content-type': string;
  'interim_results': boolean;
  word_confidence: boolean;
}

export interface Result {
  type: ResultType;
  desp: string;
  results: any[];
  final: boolean;
  result_index: number;
}

@Injectable()
export class STTWebSocketService {
  private messages: Subject<Object>;
  keepAlive: Subscription;

  constructor() { }

  enableKeepAlive(): Subscription {
    if (!this.keepAlive) {
      this.keepAlive = Observable.interval(20000)
        .subscribe(
        x => {
          console.log(`keep alive: ${x}`);
          const noop = { action: 'no-op' };
          this.messages.next(JSON.stringify(noop));
        });
    };
    return this.keepAlive;
  }

  start(contentType: string) {
    const action = {
      action: 'start',
      'content-type': contentType,
      'interim_results': false,
      // word_confidence: true,
      // timestamps: true
    };
    this.messages.next(JSON.stringify(action));
  }

  send(blob: Blob) {
    this.messages.next(blob);
  }

  stop() {
    const action = { action: 'stop' };
    this.messages.next(JSON.stringify(action));
  }

  connect(token: string, model: string, customModel: string, loggingData: boolean): Observable<Object> {
    const _model = model || MODEL;
    let URL = `${WSURL}?watson-token=${token}&model=${_model}`;
    URL = customModel ? URL + `&customization_id=${customModel}` : URL;
    URL = loggingData ? URL + `&x-watson-learning-opt-out=1` : URL;
    // this.messages = <Subject<Object>>this.wsService
    //   .connect(URL)
    //   .map(res => this.format(JSON.parse(res.data)));
    this.messages = Observable.webSocket(URL);
    return this.messages.map(msg => this.format(msg));
  }

  format(data: any): object {
    if ('state' in data) {
      return {
        type: ResultType.state,
        desp: data.state
      };
    } else if ('results' in data) {
      const results = data.results[0] ? data.results[0].alternatives : '';
      return {
        type: ResultType.result,
        results: results,
        final: data.results.final,
        result_index: data.result_index
      };
    } else if ('error' in data) {
      return {
        type: ResultType.error,
        desp: data.error
      };
    }
  }
}
