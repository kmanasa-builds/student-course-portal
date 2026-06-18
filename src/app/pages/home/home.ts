import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { Notification } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CourseSummaryWidget,
    Notification
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  // [property] is one-way binding (Component → DOM)
  // [(ngModel)] is two-way binding (DOM ↔ Component)

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 0;

  ngOnInit() {

    this.availableCourses = 12;

    console.log(
      'HomeComponent initialised — courses loaded'
    );

  }

  ngOnDestroy() {

    console.log(
      'HomeComponent destroyed'
    );

  }

  onEnrollClick() {

    this.message = 'Enrollment opened!';

  }

}