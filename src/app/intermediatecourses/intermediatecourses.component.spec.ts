import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediatecoursesComponent } from './intermediatecourses.component';

describe('IntermediatecoursesComponent', () => {
  let component: IntermediatecoursesComponent;
  let fixture: ComponentFixture<IntermediatecoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermediatecoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediatecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
