import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { Notification } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    CourseSummaryWidget,
    Notification
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 12;

  ngOnInit(): void {

    this.availableCourses = 12;

    console.log(
      'HomeComponent initialized — courses loaded'
    );

  }

  ngOnDestroy(): void {

    console.log(
      'HomeComponent destroyed'
    );

  }

  onEnrollClick(): void {

    this.message = 'Enrollment opened!';

  }

}