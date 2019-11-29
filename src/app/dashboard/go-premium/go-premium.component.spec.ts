import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoPremiumComponent } from './go-premium.component';

describe('GoPremiumComponent', () => {
  let component: GoPremiumComponent;
  let fixture: ComponentFixture<GoPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
