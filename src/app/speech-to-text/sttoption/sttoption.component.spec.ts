import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { STTOptionComponent } from './sttoption.component';

describe('STTOptionComponent', () => {
  let component: STTOptionComponent;
  let fixture: ComponentFixture<STTOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STTOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STTOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
