import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalPaneSplitterComponent } from './horizontal-pane-splitter.component';

describe('HorizontalPaneSplitterComponent', () => {
  let component: HorizontalPaneSplitterComponent;
  let fixture: ComponentFixture<HorizontalPaneSplitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalPaneSplitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalPaneSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
