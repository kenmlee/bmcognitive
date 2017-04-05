import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Bubble } from './bubble';

@Injectable()
export class BubbleService {
  private _bubbles: Bubble[] = [];

  constructor() {
    this.insertBubble(new Bubble('hello'));
    this.insertBubble(new Bubble('yes'));
    this.insertBubble(new Bubble('no'));
    this.getBubble(0).startTime.add(1, 'hour');
  }

  insertBubble(bubble: Bubble): void {
    this._bubbles = _.concat([bubble], this._bubbles);
  }

  getBubble(index: number): Bubble {
    return this._bubbles[index];
  }

  get bubbles(): Bubble[] {
    return this._bubbles;
  }

  count(): number {
    return this._bubbles.length;
  }

  clear() {
    this._bubbles = [];
  }

  sendAudio() {

  }

  getText() {

  }
}
