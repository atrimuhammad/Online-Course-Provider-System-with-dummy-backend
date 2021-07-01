import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertcoursesComponent } from './expertcourses.component';

describe('ExpertcoursesComponent', () => {
  let component: ExpertcoursesComponent;
  let fixture: ComponentFixture<ExpertcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
