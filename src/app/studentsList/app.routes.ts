import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsList } from '../studentsList/students-list/students-list';
import { StudentDetails } from './student-details/student-details';
import { StudentInfo } from './student-info/student-info';
import { StudentGrades } from './student-grades/student-grades';


export const studentListRouts: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },

  { path: 'students', component: StudentsList },

  {
    path: 'students/:id',
    component: StudentDetails,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: StudentInfo },
      { path: 'grades', component: StudentGrades }
    ]
  },

];

