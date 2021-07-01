import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MERN_Stack_Courses } from '../mern-stack-courses-model';
import { MERNStackService } from '../mern-stack-service';

@Component({
  selector: 'app-rating4courses',
  templateUrl: './rating4courses.component.html',
  styleUrls: ['./rating4courses.component.css']
})
export class Rating4coursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_rating4_courses: MERN_Stack_Courses[] = [];

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
        if(this.merncourses[i].mern_course_rating == '4')
        {
          this.mern_rating4_courses[j] = this.merncourses[i];
        }
    }
  }

}
