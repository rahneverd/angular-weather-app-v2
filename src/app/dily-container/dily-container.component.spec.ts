import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilyContainerComponent } from './dily-container.component';

describe('DilyContainerComponent', () => {
  let component: DilyContainerComponent;
  let fixture: ComponentFixture<DilyContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DilyContainerComponent]
    });
    fixture = TestBed.createComponent(DilyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
