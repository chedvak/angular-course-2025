import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { fakeTasks } from './fake_tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() userName: string = '';
  @Input() userId: string = '';

  tasks = fakeTasks

  get userSelectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
