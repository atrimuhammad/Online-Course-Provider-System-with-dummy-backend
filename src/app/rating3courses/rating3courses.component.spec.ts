import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating3coursesComponent } from './rating3courses.component';

describe('Rating3coursesComponent', () => {
  let component: Rating3coursesComponent;
  let fixture: ComponentFixture<Rating3coursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rating3coursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rating3coursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
