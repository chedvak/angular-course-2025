import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-info',
  imports: [],
  templateUrl: './student-info.html',
  styleUrl: './student-info.css'
})
export class StudentInfo {
student: any;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.student = this.studentsService.getStudentById(id);
  }
}
