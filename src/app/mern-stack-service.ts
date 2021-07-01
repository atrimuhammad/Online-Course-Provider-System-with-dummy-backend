import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MERN_Stack_Courses } from './mern-stack-courses-model';
import { MERN_COURSES } from './mern-stack-courses';

@Injectable({
  providedIn: 'root',
})
export class MERNStackService {

  getMERNCourses(): Observable<MERN_Stack_Courses[]> {
    const merncourses = of(MERN_COURSES);
    return merncourses;
  }
}
