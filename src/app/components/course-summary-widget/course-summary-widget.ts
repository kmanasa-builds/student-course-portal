import { Component } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidget {

  totalCourses = 0;

  constructor(private courseService: CourseService) {

    this.totalCourses = this.courseService.getCourses().length;

  }

}