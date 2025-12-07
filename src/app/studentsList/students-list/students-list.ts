import { Component, computed, Input, input } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students-list',
  imports: [RouterLink, FormsModule],
  templateUrl: './students-list.html',
  styleUrl: './students-list.css',
})
export class StudentsList {
  course = input<'Angular' | 'React'>();
  // @Input() course: 'Angular' | 'React' | null = null;

  constructor(private studentsService: StudentsService, private router: Router) {}

  filteredStudents = computed(() =>
    this.studentsService.getStudents().filter((student) => {
      if (this.course()) {
        return student.course === this.course();
      }
      return true;
    })
  );

  // get filteredStudents() {
  //   return this.studentsService.getStudents().filter((student) => {
  //     if (this.course) {
  //       return student.course === this.course;
  //     }
  //     return true;
  //   });
  // }

  ngOnInit() {
    console.log('course = ', this.course);
  }

  filter(course: 'Angular' | 'React') {
    this.router.navigate([], {
      queryParams: { course },
    });
  }

  clearFilter() {
    this.router.navigate([], {
      queryParams: {},
    });
  }
}
