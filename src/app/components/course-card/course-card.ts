import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input()
  course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: string;
  };

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  isEnrolled = false;

  get cardClasses() {

    return {

      'card--enrolled': this.isEnrolled,

      'card--full': this.course.credits >= 4,

      'expanded': this.isExpanded

    };

  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(
      'Previous Value:',
      changes['course']?.previousValue
    );

    console.log(
      'Current Value:',
      changes['course']?.currentValue
    );

  }

}