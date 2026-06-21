import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  searchTerm = '';

  selectedCourseId: number | null = null;

  isLoading = true;

  errorMessage = '';

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadCourses();

  }

  loadCourses(): void {

    this.courseService.getCourses().subscribe({

      next: (courses: Course[]) => {

        this.courses = courses;

      },

      error: (err: Error) => {

        this.errorMessage = err.message;

      },

      complete: () => {

        this.isLoading = false;

      }

    });

  }

  searchCourse(): void {

    if (this.searchTerm.trim() === '') {

      this.loadCourses();

      return;

    }

    this.courseService.getCourses().subscribe({

      next: (courses: Course[]) => {

        this.courses = courses.filter(course =>
          course.name.toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        );

      }

    });

  }

  goToCourse(id: number): void {

    this.selectedCourseId = id;

    this.router.navigate(['/courses', id]);

  }

  trackByCourseId(index: number, course: Course): number {

    return course.id;

  }

}