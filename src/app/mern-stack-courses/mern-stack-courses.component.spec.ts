import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MernStackCoursesComponent } from './mern-stack-courses.component';

describe('MernStackCoursesComponent', () => {
  let component: MernStackCoursesComponent;
  let fixture: ComponentFixture<MernStackCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MernStackCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MernStackCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
