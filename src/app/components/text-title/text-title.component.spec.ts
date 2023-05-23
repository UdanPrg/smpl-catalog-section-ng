import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTitleComponent } from './text-title.component';

describe('TextTitleComponent', () => {
  let component: TextTitleComponent;
  let fixture: ComponentFixture<TextTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextTitleComponent]
    });
    fixture = TestBed.createComponent(TextTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
