import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphMonthwiseComponent } from './bar-graph-monthwise.component';

describe('BarGraphMonthwiseComponent', () => {
  let component: BarGraphMonthwiseComponent;
  let fixture: ComponentFixture<BarGraphMonthwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarGraphMonthwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphMonthwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
