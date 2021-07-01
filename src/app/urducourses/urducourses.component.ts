import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MERN_Stack_Courses } from '../mern-stack-courses-model';
import { MERNStackService } from '../mern-stack-service';

@Component({
  selector: 'app-urducourses',
  templateUrl: './urducourses.component.html',
  styleUrls: ['./urducourses.component.css']
})
export class UrducoursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_urdu_courses: MERN_Stack_Courses[] = [];

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
        if(this.merncourses[i].mern_course_lang == 'Urdu')
        {
          this.mern_urdu_courses[j] = this.merncourses[i];
          j+=1
        }
    }
  }

}
