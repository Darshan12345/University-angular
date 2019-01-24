import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header/header.component';
import { InstructorComponent } from './instructor/instructor.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRouteModule} from './app-route/app-route.module';
import { InstructorAddComponent } from './instructor/instructor-add/instructor-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { InstructorHeaderComponent } from './header/instructor-header/instructor-header.component';

import { CourseViewComponent } from './course/course-view/course-view.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstructorComponent,
    InstructorAddComponent,
    CourseAddComponent,
    InstructorHeaderComponent,

    CourseViewComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule, AppRouteModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
