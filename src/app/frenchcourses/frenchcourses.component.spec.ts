import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchcoursesComponent } from './frenchcourses.component';

describe('FrenchcoursesComponent', () => {
  let component: FrenchcoursesComponent;
  let fixture: ComponentFixture<FrenchcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrenchcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
