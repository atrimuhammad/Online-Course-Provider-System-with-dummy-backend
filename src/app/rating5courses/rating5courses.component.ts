import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MERN_Stack_Courses } from '../mern-stack-courses-model';
import { MERNStackService } from '../mern-stack-service';

@Component({
  selector: 'app-rating5courses',
  templateUrl: './rating5courses.component.html',
  styleUrls: ['./rating5courses.component.css']
})
export class Rating5coursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_rating5_courses: MERN_Stack_Courses[] = [];

  constructor(private mernstackService: MERNStackService, private router: Router) { }

  ngOnInit()
  {
    this.getMERNCourses();
  }

  getMERNCourses(): void
  {
    this.mernstackService.getMERNCourses().subscribe(merncourses => this.merncourses = merncourses);

    for(let i = 0, j = 0; i < this.merncourses.length; i++)
    {
        if(this.merncourses[i].mern_course_rating == '5')
        {
          this.mern_rating5_courses[j] = this.merncourses[i];
        }
    }
  }

}
