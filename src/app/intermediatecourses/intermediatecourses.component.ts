import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MERN_Stack_Courses } from '../mern-stack-courses-model';
import { MERNStackService } from '../mern-stack-service';

@Component({
  selector: 'app-intermediatecourses',
  templateUrl: './intermediatecourses.component.html',
  styleUrls: ['./intermediatecourses.component.css']
})
export class IntermediatecoursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_intermediate_courses: MERN_Stack_Courses[] = [];

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
        if(this.merncourses[i].mern_course_level == 'Intermediate')
        {
          this.mern_intermediate_courses[j] = this.merncourses[i];
        }
    }
  }

}
