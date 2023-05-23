import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSizeComponent } from './range-size.component';

describe('RangeSizeComponent', () => {
  let component: RangeSizeComponent;
  let fixture: ComponentFixture<RangeSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeSizeComponent]
    });
    fixture = TestBed.createComponent(RangeSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
