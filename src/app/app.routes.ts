import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { StudentProfile } from './pages/student-profile/student-profile';
import { NotFound } from './pages/not-found/not-found';

import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';
import { CourseListComponent } from './pages/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';

import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'profile',
    component: StudentProfile,
    canActivate: [authGuard]
  },

  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [

      {
        path: '',
        component: CourseListComponent
      },

      {
        path: ':id',
        component: CourseDetailComponent
      }

    ]
  },

  {
    path: 'enroll',
    component: ReactiveEnrollmentForm,
    canDeactivate: [unsavedChangesGuard]
  },

  {
    path: '**',
    component: NotFound
  }

];