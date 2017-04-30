import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCheckComponent } from './system-check.component';

describe('SystemCheckComponent', () => {
  let component: SystemCheckComponent;
  let fixture: ComponentFixture<SystemCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
