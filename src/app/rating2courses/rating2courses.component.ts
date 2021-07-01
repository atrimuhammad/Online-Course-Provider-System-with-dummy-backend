import { Component, OnInit } from '@angular/core';
import { MERN_Stack_Courses } from '../mern-stack-courses-model';
import { MERNStackService } from '../mern-stack-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating2courses',
  templateUrl: './rating2courses.component.html',
  styleUrls: ['./rating2courses.component.css']
})
export class Rating2coursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_rating2_courses: MERN_Stack_Courses[] = [];

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
        if(this.merncourses[i].mern_course_rating == '2')
        {
          this.mern_rating2_courses[j] = this.merncourses[i];
        }
    }
  }

}
