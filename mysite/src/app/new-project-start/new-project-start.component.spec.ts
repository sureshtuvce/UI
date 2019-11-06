import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectStartComponent } from './new-project-start.component';

describe('NewProjectStartComponent', () => {
  let component: NewProjectStartComponent;
  let fixture: ComponentFixture<NewProjectStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
