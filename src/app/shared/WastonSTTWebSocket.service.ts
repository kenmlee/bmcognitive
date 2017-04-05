import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { WebSocketService } from './websocket.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// For develop only
const token = `Th1la9TzpW%2B9t8utFoL5U6RE5G0vPaMJ0vF%2By6s4xK7YuEu4Gawz3nCohlGBEHv3w1Ljq%2F8gSgtLgTCTHnx5WO1J8cu7dYbzl41bzGETk5cs29bN1V9B%2BpmMVUSFWpwITdlsvkchn44Nxe7F2kzwjE75tVJBHX0mQupNzAst5oe9U1fiv%2BUQypfgFov8NdCQKNOwS8Gc8x1cmFRS7A5l3RCO%2FZHKniTzd0a5aOLFX27uXH6vKFpLOquzXIaYb9sFRNh9WSqeC6ZBmVEHm0VeFfKTPFbkK4sWkIJZYOISEtbNLxt8b2mftZpCz0%2BsUcqfqQz%2Bh3al5iDdgNPX%2FEqkEhmz9QkjyueGJa4HfcaHb%2BeJ8iBrZ9zzCqKI1lJkP6HQq2ClQU0zSq9u%2FgZnNLyJrZsT8WjXfnZ4XpcVK8isl%2FBwAuNy8jeIyKLWti%2BbkK7xCwH7gtZwPo5KU9k4ipjZJnwHeYuvHC0ojH2KwEuuNVkmm02M8D9bTSCngTmGbo6tGfRL5iHJNFKurYKsqwCMGfRkDsPqR7sMnbNMV70HFyuT5o1q0ic9L3UPzua1nkVhKvv0uCmDDv4ZBnmhnaraJ7%2B8h8wz8WtIFI%2F6q98oGhlGwdK5OhV1E7SL9n3qC3rRk0IaVDph6H1udLPq14rDI63tXWWmPP8%2Fm62ULWoQ9rTKqRE6Yp2fSOz%2FNRjwswBI3RhJUdMbgaK%2FIXhG4QUtDVOynhHnWqj%2FhPu9SjQWHZIRYMglRn9SUrB5AzF56H4eDjBklGOvnCIt33sIyLfAwkXNbIKlZBa86n21kJamlfI6%2B7hu8BidEzVWDqK7PtGmdAP0Qz8O6iZ3R49sAk%2BsbS5gIxoSi9XoVhRgsFT6%2FTyokEORc00orym1EkkI5DebMz3p37Z0iVcY%2Bxcpv%2BtDPvEA2Acu%2BTHBPJGZZGwzuXM9PXLKdQa5IQ%3D%3D`;
const apiurl = 'wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize?watson-token='+token;

export interface Message {
  'action': string;
  'content-type': string;
  'interim_results': boolean;
}

export interface Result {
  results: any;
  result_index: object;
}

@Injectable()
export class STTWebSocketService {
  public messages: Subject<Object>;

  constructor(private wsService: WebSocketService) {
    this.messages = <Subject<Object>>wsService
      .connect(apiurl)
      .map((res: MessageEvent): Object => {
        return JSON.parse(res.data);
      });
  }
}
