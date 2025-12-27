import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}

@Component({
  selector: 'app-users-fetch',
  imports: [],
  templateUrl: './users-fetch.html',
  styleUrl: './users-fetch.css',
})
export class UsersFetch implements OnInit, OnDestroy {
  private http = inject(HttpClient);

  users: User[] = [];
  loading = false;
  error: string | null = null;
  private sub?: Subscription;

  ngOnInit() {
    this.loading = true;

    setTimeout(() => {
      fetchUsers();
    }, 2000);

    const fetchUsers = () => {
      this.sub = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
          console.log(this.users);
        },
        error: (_) => {
          this.error = 'Error loading data';
          this.loading = false;
          console.log(this.error);
        },
      });
    };
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
