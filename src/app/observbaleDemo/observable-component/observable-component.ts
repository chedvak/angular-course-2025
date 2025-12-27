import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-component',
  imports: [],
  templateUrl: './observable-component.html',
  styleUrl: './observable-component.css',
})
export class ObservableComponent implements OnInit, OnDestroy {
  value = '';
  error = '';

  subscription!: Subscription;

  ngOnInit() {
    const myObservable = new Observable<string>((observer) => {
      observer.next('Step 1');
      setTimeout(() => observer.next('Step 2'), 3000);
      // setTimeout(() => observer.error('Something went wrong!'), 3000);
      setTimeout(() => observer.next('Step 3'), 6000); // לא יגיע
      setTimeout(() => observer.complete(), 9000);
    });

    this.subscription = myObservable.subscribe({
      next: (val) => {
        this.value = val;
        console.log('Received value:', val);
      },
      error: (err) => (this.error = err),
      complete: () => console.log('Observable completed'),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
