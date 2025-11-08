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
  
  onTaskCompleted(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  addTask() {
    const newTask = {
      id: 'newt1',
      userId: 'u1',
      title: 'New task',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    }
    fakeTasks.push(newTask);
    this.tasks = fakeTasks;
  }
}
