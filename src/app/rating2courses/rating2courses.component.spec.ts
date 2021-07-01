import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating2coursesComponent } from './rating2courses.component';

describe('Rating2coursesComponent', () => {
  let component: Rating2coursesComponent;
  let fixture: ComponentFixture<Rating2coursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rating2coursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rating2coursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
