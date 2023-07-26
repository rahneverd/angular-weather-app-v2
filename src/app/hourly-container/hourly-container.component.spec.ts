import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyContainerComponent } from './hourly-container.component';

describe('HourlyContainerComponent', () => {
  let component: HourlyContainerComponent;
  let fixture: ComponentFixture<HourlyContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourlyContainerComponent]
    });
    fixture = TestBed.createComponent(HourlyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
