import { Component, computed, inject, Input, input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Student, StudentsService } from '../students.service';

@Component({
  selector: 'app-student-details',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails {
  id = input.required<string>();
  studentService = inject(StudentsService);
  student = computed(() =>  this.studentsService.getStudentById(Number(this.id())));

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private studentsService: StudentsService) {
    // const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.student = this.studentsService.getStudentById(this.id());
  }
}
