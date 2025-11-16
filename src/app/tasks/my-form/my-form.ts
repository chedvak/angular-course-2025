import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  imports: [FormsModule],
  templateUrl: './my-form.html',
  styleUrl: './my-form.css'
})
export class MyForm {

  onSubmit(form: NgForm){
      console.log("form", form);
      
  }
}


