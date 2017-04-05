import moment from 'moment';

export class Bubble {
  private _startTime: moment.Moment;

  constructor(private content: string) {
    this._startTime = moment();
  }

  get startTime(): moment.Moment {
    return this._startTime;
  }

  set startTime(time: moment.Moment) {
    this._startTime = time;
  }
}
