import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() createNewTask = new EventEmitter<NewTaskData>();


  title = '';
  summary = '';
  dueDate = '';
  
  onCancelClicked(){
    this.cancel.emit();
  }

  onCreateTask(form: NgForm){
    console.log("form = ", form);
    
    this.createNewTask.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    });
  }

}
