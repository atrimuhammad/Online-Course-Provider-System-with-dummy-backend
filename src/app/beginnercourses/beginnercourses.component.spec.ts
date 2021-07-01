import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnercoursesComponent } from './beginnercourses.component';

describe('BeginnercoursesComponent', () => {
  let component: BeginnercoursesComponent;
  let fixture: ComponentFixture<BeginnercoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnercoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnercoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
