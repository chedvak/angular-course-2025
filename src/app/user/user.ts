import { Component, computed, EventEmitter, input, Input, output, Output, Signal, signal } from '@angular/core';
import { UserObj } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true }) user!: UserObj;
  @Input({required: true}) isSelected!: boolean;
  // @Output() userSelected = new EventEmitter<string>();
  userSelected = output<string>();

  get userImgPath() {
    return 'src/assets/users/' + this.user.avatar;
  }

  onUserClicked() {
    this.userSelected.emit(this.user.id);
  }

}
