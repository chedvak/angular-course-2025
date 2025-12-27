import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TimerService {
  seconds = signal(0);

  increment() {
    this.seconds.update(s => s + 1);
  }

  reset() {
    this.seconds.set(0);
  }
}
