import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphDaywiseComponent } from './bar-graph-daywise.component';

describe('BarGraphDaywiseComponent', () => {
  let component: BarGraphDaywiseComponent;
  let fixture: ComponentFixture<BarGraphDaywiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarGraphDaywiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphDaywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
