import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User } from "./user/user";
import { USERS } from './fake_users';
import { Tasks } from './tasks/tasks';
import { UserObj } from './user/user.model';
import { SignalsDemoComponent } from "./signals-demo/signals-demo.component";
import { NewUser } from "./user/new-user/new-user";
import { MyForm } from "./tasks/my-form/my-form";
import { GameContainer } from "./guessTheColor/game-container/game-container";
import { ShoppingPage } from "./shoppingService/shopping-page/shopping-page";
import { StudentsContainer } from "./studentsList/students-container/students-container";

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks, SignalsDemoComponent, NewUser, MyForm, GameContainer, ShoppingPage, StudentsContainer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  users = USERS;
  selectedUser?: UserObj;
  shouldShowAddUserForm = false

  onUserSelected(userId: string) {
    this.selectedUser = this.users.find(u => u.id === userId);
  }

  onClickAddUser() {
    this.shouldShowAddUserForm = true;
  }

  addUser(formValue: any) {
    const id = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    const fullName = `${formValue.name.firstName} ${formValue.name.lastName}`.trim();
    const user: UserObj = {
      id,
      name: fullName,
      avatar: '' 
    };

    this.users.push(user);
    this.closeAddUserForm();
  }

  closeAddUserForm() {
    this.shouldShowAddUserForm = false;
  }
}
