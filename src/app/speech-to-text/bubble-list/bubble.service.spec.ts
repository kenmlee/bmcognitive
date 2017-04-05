import { TestBed, inject } from '@angular/core/testing';

import { BubbleService } from './bubble.service';

describe('BubbleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BubbleService]
    });
  });

  it('should ...', inject([BubbleService], (service: BubbleService) => {
    expect(service).toBeTruthy();
  }));
});
