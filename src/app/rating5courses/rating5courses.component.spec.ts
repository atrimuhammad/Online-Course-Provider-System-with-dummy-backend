import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating5coursesComponent } from './rating5courses.component';

describe('Rating5coursesComponent', () => {
  let component: Rating5coursesComponent;
  let fixture: ComponentFixture<Rating5coursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rating5coursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rating5coursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
