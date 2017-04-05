import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvConfigComponent } from './env-config.component';

describe('EnvConfigComponent', () => {
  let component: EnvConfigComponent;
  let fixture: ComponentFixture<EnvConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
