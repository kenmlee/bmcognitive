import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BubbleService } from './bubble.service';
import { Bubble } from './bubble';

@Component({
  selector: 'app-bubble-list',
  templateUrl: './bubble-list.component.html',
  styleUrls: ['./bubble-list.component.scss'],
  providers: [BubbleService]
})
export class BubbleListComponent implements OnInit {
  @Input() bubbles: Array<Bubble> = [];

  constructor(private bubbleService: BubbleService, public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }
  // TODO: still working on. Not finished.
  // displayTime(index:number):boolean{
  //     if(!this.latestTime)this.latestTime=this.getBubble(0).startTime;

  //     this.latestTime = this.getBubble(index).startTime;

  //     if(this._bubbles.length-1==index) return true;


  //     let bubble=this.getBubble(index);
  //     let start=this.latestTime.clone();
  //     start.subtract(INTERVAL, 'seconds');
  //     let end = this.latestTime.clone();
  //     end.add(INTERVAL, 'seconds');
  //     if(!bubble.startTime.isBetween(start, end)) return true;

  //     return false;
  // }
}
