import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating4coursesComponent } from './rating4courses.component';

describe('Rating4coursesComponent', () => {
  let component: Rating4coursesComponent;
  let fixture: ComponentFixture<Rating4coursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rating4coursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rating4coursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
