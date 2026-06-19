import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  isLoading = true;

  selectedCourseId: number | null = null;

  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.courses = this.courseService.getCourses();

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

  }

  onEnroll(courseId: number): void {

    console.log('Enrolling in course:', courseId);

    this.selectedCourseId = courseId;

  }

  trackByCourseId(index: number, course: Course): number {

    return course.id;

  }

  goToCourse(id: number): void {

    this.router.navigate(
      ['courses', id]
    );

  }

  searchCourse(): void {

    this.router.navigate(
      ['courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );

  }

}