import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphWeekwiseComponent } from './bar-graph-weekwise.component';

describe('BarGraphWeekwiseComponent', () => {
  let component: BarGraphWeekwiseComponent;
  let fixture: ComponentFixture<BarGraphWeekwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarGraphWeekwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphWeekwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
