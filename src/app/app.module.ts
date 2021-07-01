import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MernStackCoursesComponent } from './mern-stack-courses/mern-stack-courses.component';
import { HttpClientModule } from '@angular/common/http';
import { Rating1coursesComponent } from './rating1courses/rating1courses.component';
import { Rating2coursesComponent } from './rating2courses/rating2courses.component';
import { Rating3coursesComponent } from './rating3courses/rating3courses.component';
import { Rating4coursesComponent } from './rating4courses/rating4courses.component';
import { Rating5coursesComponent } from './rating5courses/rating5courses.component';
import { BeginnercoursesComponent } from './beginnercourses/beginnercourses.component';
import { IntermediatecoursesComponent } from './intermediatecourses/intermediatecourses.component';
import { ExpertcoursesComponent } from './expertcourses/expertcourses.component';
import { UrducoursesComponent } from './urducourses/urducourses.component';
import { EnglishcoursesComponent } from './englishcourses/englishcourses.component';
import { FrenchcoursesComponent } from './frenchcourses/frenchcourses.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'MernStackCourses', component: MernStackCoursesComponent },

  { path: 'Rating1courses', component: Rating1coursesComponent },
  { path: 'Rating2courses', component: Rating2coursesComponent },
  { path: 'Rating3courses', component: Rating3coursesComponent },
  { path: 'Rating4courses', component: Rating4coursesComponent },
  { path: 'Rating5courses', component: Rating5coursesComponent },
  { path: 'Urducourses', component: UrducoursesComponent },
  { path: 'Englishcourses', component: EnglishcoursesComponent },
  { path: 'Frenchcourses', component: FrenchcoursesComponent },
  { path: 'Beginnercourses', component: BeginnercoursesComponent },
  { path: 'Intermediatecourses', component: IntermediatecoursesComponent },
  { path: 'Expertcourses', component: ExpertcoursesComponent },
  { path: 'Details', component: DetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MernStackCoursesComponent,
    Rating1coursesComponent,
    Rating2coursesComponent,
    Rating3coursesComponent,
    Rating4coursesComponent,
    Rating5coursesComponent,
    BeginnercoursesComponent,
    IntermediatecoursesComponent,
    ExpertcoursesComponent,
    UrducoursesComponent,
    EnglishcoursesComponent,
    FrenchcoursesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
