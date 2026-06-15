import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCard } from '../../components/course-card/course-card';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard,
    Highlight
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA101',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 3,
      name: 'Spring Boot',
      code: 'SPR101',
      credits: 5,
      gradeStatus: 'pending'
    },
    {
      id: 4,
      name: 'SQL',
      code: 'SQL101',
      credits: 2,
      gradeStatus: 'passed'
    },
    {
      id: 5,
      name: 'Python',
      code: 'PY101',
      credits: 3,
      gradeStatus: 'pending'
    }
  ];

  selectedCourseId: number = 0;

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

  onEnroll(courseId: number) {

    console.log('Enrolling course :', courseId);

    this.selectedCourseId = courseId;

  }

}