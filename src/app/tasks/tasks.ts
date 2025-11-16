import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { fakeTasks } from './fake_tasks';
import { NewTask } from './new-task/new-task';
import { MyForm } from "./my-form/my-form";
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask, MyForm],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() userName: string = '';
  @Input() userId: string = '';

  shouldShowAddTaskDialog = false;
  tasks = fakeTasks

  get userSelectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
  
  onTaskCompleted(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onClickAddTask() {
    this.shouldShowAddTaskDialog = true;
  }

  onCreateNewTask(newTaskData: NewTaskData){
    const newTask = {
      id: 't' + (this.tasks.length + 1),
      userId: this.userId,
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.dueDate, 
    }   

    this.tasks.push(newTask);
    this.closeDialog();

  }

  closeDialog(){
    this.shouldShowAddTaskDialog = false;
  }
}
