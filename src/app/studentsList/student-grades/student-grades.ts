import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-grades',
  imports: [],
  templateUrl: './student-grades.html',
  styleUrl: './student-grades.css'
})
export class StudentGrades {
  grades: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    const student = this.studentsService.getStudentById(id);
    this.grades = student?.grades || [];
  }
}
