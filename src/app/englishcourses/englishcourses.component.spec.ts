import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishcoursesComponent } from './englishcourses.component';

describe('EnglishcoursesComponent', () => {
  let component: EnglishcoursesComponent;
  let fixture: ComponentFixture<EnglishcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
