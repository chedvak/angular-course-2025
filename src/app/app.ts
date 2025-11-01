import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User } from "./user/user";
import { USERS } from './fake_users';
import { Tasks } from './tasks/tasks';
import { UserObj } from './user/user.model';
import { SignalsDemoComponent } from "./signals-demo/signals-demo.component";

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks, SignalsDemoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  users = USERS;
  selectedUser?: UserObj;

  onUserSelected(userId: string) {
    this.selectedUser = this.users.find(u => u.id === userId);
  }
}
