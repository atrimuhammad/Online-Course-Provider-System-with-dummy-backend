import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrducoursesComponent } from './urducourses.component';

describe('UrducoursesComponent', () => {
  let component: UrducoursesComponent;
  let fixture: ComponentFixture<UrducoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrducoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrducoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
