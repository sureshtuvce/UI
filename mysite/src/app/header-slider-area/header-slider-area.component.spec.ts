import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSliderAreaComponent } from './header-slider-area.component';

describe('HeaderSliderAreaComponent', () => {
  let component: HeaderSliderAreaComponent;
  let fixture: ComponentFixture<HeaderSliderAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSliderAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSliderAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
